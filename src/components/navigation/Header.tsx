"use client";

import { Logo } from "@/components/Logo";
import NavTabs from "@/components/NavTabs";
import { motion } from "motion/react";
import { useScroll } from "motion/react";
import { useEffect, useState } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const currentScrollY = latest;

      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    });

    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-zinc-900 text-white pt-6 px-8 sticky top-0 z-50"
    >
      <div>
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavTabs />
        </div>
      </div>
    </motion.header>
  );
}
