"use client";
import { motion } from "motion/react";
import { useScroll } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        // height: 10,
        originX: 0,
        zIndex: 100,
        // backgroundColor: "#ff0088",
      }}
      className="bg-violet-500 h-0.5"
    />
  );
}
