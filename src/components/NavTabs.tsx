import { Button } from "./ui/button";

export default function NavTabs() {
  const navItems = [
    { value: "about", label: "About", href: "#about" },
    { value: "experience", label: "Experience", href: "#experience" },
    { value: "projects", label: "Projects", href: "#projects" },
    { value: "contact", label: "Contact", href: "#contact" },
  ];
  return (
    <nav className="flex gap-2">
      {navItems.map((item) => (
        <Button key={item.href} variant="ghost" size="sm" asChild>
          <a href={item.href}>{item.label}</a>
        </Button>
      ))}
    </nav>
  );
}
