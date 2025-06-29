import { Logo } from "@/components/Logo";
import NavTabs from "@/components/NavTabs";

// src/components/navigation/Header.tsx
export function Header() {
  return (
    <header className="bg-slate-900 text-white">
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
