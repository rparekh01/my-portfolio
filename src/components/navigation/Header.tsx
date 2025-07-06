import { Logo } from "@/components/Logo";
import NavTabs from "@/components/NavTabs";

// src/components/navigation/Header.tsx
export function Header() {
  return (
    <header className="bg-slate-900 text-white pt-6 px-8 sticky top-0 z-50">
      <div>
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavTabs />
        </div>
      </div>
    </header>
  );
}
