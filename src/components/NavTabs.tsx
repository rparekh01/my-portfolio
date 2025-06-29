import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <a href={item.href}>{item.label}</a>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
