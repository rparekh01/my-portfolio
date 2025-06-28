import { Logo } from "@/components/Logo";

// src/components/navigation/Header.tsx
export function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div>
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">{/* Nav items */}</nav>
        </div>
      </div>
    </header>
  );
}
