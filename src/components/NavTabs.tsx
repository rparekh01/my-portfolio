import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function NavTabs() {
  const navItems = [
    { value: "about", label: "About", href: "#about" },
    { value: "experience", label: "Experience", href: "#experience" },
    { value: "work", label: "Work", href: "#work" },
    { value: "contact", label: "Contact", href: "#contact" },
  ];
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        {navItems.map((item) => (
          <TabsTrigger key={item.value} value={item.value} asChild>
            <Link href={item.href}>{item.label}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
