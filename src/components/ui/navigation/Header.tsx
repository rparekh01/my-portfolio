// src/components/navigation/Header.tsx
export function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>{/* Logo "B" here */}</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">{/* Nav items */}</nav>

          {/* Mobile menu button */}
          <button className="md:hidden">{/* Hamburger icon */}</button>
        </div>
      </div>
    </header>
  );
}
