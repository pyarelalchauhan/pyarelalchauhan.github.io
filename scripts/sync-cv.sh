#!/usr/bin/env bash
# Copy the built CV PDFs from the master CV folder into public/.
# Override the source with CV_MASTER=/path/to/CV_master npm run sync-cv
set -euo pipefail

SRC="${CV_MASTER:-/SSDDISK/pyare/Application_Apply/_shared/CV_master}"
cd "$(dirname "$0")/.."

for f in main main_with_metrics; do
  if [ "$SRC/$f.tex" -nt "$SRC/$f.pdf" ]; then
    echo "warning: $f.pdf is older than $f.tex, rebuild the CV first" >&2
  fi
done

cp "$SRC/main.pdf" public/resume.pdf
cp "$SRC/main_with_metrics.pdf" public/resume_with_metrics.pdf
echo "Copied CV from $SRC"
