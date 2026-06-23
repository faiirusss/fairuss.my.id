"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const GLOW_SIZE = 400;
const INITIAL_POSITION = {
  x: 120,
  y: 100,
};

export function CursorGlow() {
  const pointerX = useMotionValue(INITIAL_POSITION.x);
  const pointerY = useMotionValue(INITIAL_POSITION.y);
  const x = useSpring(pointerX, { stiffness: 120, damping: 30, mass: 0.35 });
  const y = useSpring(pointerY, { stiffness: 120, damping: 30, mass: 0.35 });

  useEffect(() => {
    const updateGlowPosition = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    window.addEventListener("pointermove", updateGlowPosition);

    return () => {
      window.removeEventListener("pointermove", updateGlowPosition);
    };
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-50 h-[400px] w-[400px] rounded-full bg-[#15d98bfd] opacity-50 blur-[150px] filter"
      style={{
        x,
        y,
        marginLeft: -GLOW_SIZE / 2,
        marginTop: -GLOW_SIZE / 2,
      }}
    />
  );
}
