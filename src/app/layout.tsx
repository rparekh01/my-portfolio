"use client";
import { Header } from "@/components/navigation/Header";
import "./globals.css";
import { motion, useScroll } from "motion/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();

  return (
    <html lang="en">
      <body>
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
        <Header />

        {children}
      </body>
    </html>
  );
}
