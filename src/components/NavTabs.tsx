import Link from "next/link";
import { Button } from "./ui/button";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { Separator } from "./ui/separator";

export default function NavTabs() {
  const navItems = [
    { value: "about", label: "About", href: "#about" },
    { value: "experience", label: "Experience", href: "#experience" },
    { value: "projects", label: "Projects", href: "#projects" },
  ];
  return (
    <div className="flex items-center">
      <nav className="flex">
        {navItems.map((item) => (
          <Button key={item.href} variant="ghost" size="sm" asChild>
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </nav>
      <Button
        variant="ghost"
        className=" border rounded-sm hover:bg-transparent text-teal-400 border-teal-400 hover:text-teal-200 hover:border-teal-200 hover:cursor-pointer mr-3"
      >
        Resume
      </Button>
      <Separator
        orientation="vertical"
        className="data-[orientation=vertical]:h-6 w-px mr-3"
      />

      <div className="flex gap-3">
        <a href="https://github.com/rparekh01" className="hover:text-teal-200">
          <LiaGithub className="size-7 min-w-fit" />
        </a>
        <a
          href="https://www.linkedin.com/in/r-p/"
          className="hover:text-teal-200"
        >
          <LiaLinkedin className="size-7 min-w-fit" />
        </a>
      </div>

      {/* </Button> */}
    </div>
  );
}
