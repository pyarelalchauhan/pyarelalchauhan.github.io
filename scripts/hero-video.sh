#!/usr/bin/env bash
# Rebuild the home-page clip (public/images/bhopalmls_street.mp4 + poster) from the
# BhopalMLS overview-video clips: three scenes and one click, crossfaded into a loop.
# Each cut is cropped to drop the viewer's toolbar, note and legend.
# Override the source with CLIPS=/path/to/clips_page bash scripts/hero-video.sh
set -euo pipefail

CLIPS="${CLIPS:-/DATA/pyare/Accessibility/docs/paper/bhopal-mls/video/_work/clips_page}"
cd "$(dirname "$0")/.."
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

X=0.6 # crossfade seconds
V="crop=1920:740:0:150,scale=1280:-2:flags=lanczos,fps=30,setsar=1,format=yuv420p,setpts=PTS-STARTPTS"
# clip start duration slowdown (1 = real time)
segs=(
  "shot05 10.5 4.4 1"    # Bhopal_7: tree-lined corridor
  "shot02 5.0 4.6 1"     # Bhopal_6: pole and wires
  "shot06 16.4 2.7 1.6"  # Bhopal_4: junction by the temple
  "shot02 35.0 4.1 1.25" # Bhopal_6: click shows Wire, then Pole and Tower
)

calc() { python3 -c "print(round($1, 3))"; }

inputs=(); filters=""; durs=(); i=0
for s in "${segs[@]}"; do
  read -r f st du k <<<"$s"
  inputs+=(-ss "$st" -t "$du" -i "$CLIPS/$f.mp4")
  slow=""; [ "$k" != "1" ] && slow=",setpts=$k*PTS,minterpolate=fps=30:mi_mode=blend"
  filters+="[$i:v]$V$slow[s$i];"
  durs+=("$(calc "$du*$k")"); i=$((i+1))
done

prev="s0"; acc=${durs[0]}
for j in $(seq 1 $((${#segs[@]} - 1))); do
  filters+="[$prev][s$j]xfade=transition=fade:duration=$X:offset=$(calc "$acc-$X")[c$j];"
  prev="c$j"; acc=$(calc "$acc+${durs[$j]}-$X")
done
ffmpeg -v error -y "${inputs[@]}" -filter_complex "${filters%;}" -map "[$prev]" -an \
  -c:v libx264 -crf 12 -preset fast "$TMP/master.mp4"

# Fade the end back into the start so the loop has no jump.
L=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$TMP/master.mp4")
ffmpeg -v error -y -i "$TMP/master.mp4" -filter_complex \
  "[0:v]split[a][b];[a]trim=start=$X,setpts=PTS-STARTPTS[main];[b]trim=0:$X,setpts=PTS-STARTPTS[head];[main][head]xfade=transition=fade:duration=$X:offset=$(calc "$L-2*$X")[v]" \
  -map "[v]" -an -c:v libx264 -crf 30 -preset veryslow -profile:v high -pix_fmt yuv420p \
  -movflags +faststart public/images/bhopalmls_street.mp4
ffmpeg -v error -y -i public/images/bhopalmls_street.mp4 -frames:v 1 -c:v libwebp -quality 82 \
  public/images/bhopalmls_street_poster.webp
echo "Wrote public/images/bhopalmls_street.mp4 and poster"
