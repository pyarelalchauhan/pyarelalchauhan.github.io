"use client";

import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

// Muted looping clip. It plays only while on screen, stays on its poster frame
// for people who prefer reduced motion, and can always be paused or played.
export default function HeroVideo({
  src,
  poster,
  width,
  height,
  label,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      userPaused.current = true;
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !userPaused.current) v.play().catch(() => {});
      else v.pause();
    });
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    userPaused.current = !v.paused;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-[#0b0f12]">
      <video
        ref={ref}
        src={src}
        poster={poster}
        width={width}
        height={height}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="block aspect-[16/10] h-auto w-full object-cover sm:aspect-auto"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-2.5 right-2.5 rounded-full bg-black/55 p-2 text-white backdrop-blur hover:bg-black/75"
      >
        {playing ? <FiPause size="0.85rem" /> : <FiPlay size="0.85rem" />}
      </button>
    </div>
  );
}
