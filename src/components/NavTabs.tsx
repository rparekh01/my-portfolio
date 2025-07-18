import Link from "next/link";
import { Button } from "./ui/button";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { Separator } from "./ui/separator";

export default function NavTabs() {
  const navItems = [
    { value: "about", label: "About", href: "#about" },
    { value: "experience", label: "Experience", href: "#experience" },
    // { value: "projects", label: "Projects", href: "#projects" },
  ];

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };
  return (
    <div className="flex items-center">
      <nav className="flex">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            size="sm"
            asChild
            className="hover:text-violet-300 hover:shadow-violet-500/10 hover:bg-transparent"
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </nav>
      <Button
        variant="ghost"
        className=" border rounded-sm hover:bg-transparent text-violet-400 border-violet-400 hover:text-violet-300 hover:shadow-violet-500/10  hover:border-violet-300 hover:cursor-pointer mx-3"
        onClick={handleResumeClick}
      >
        Resume
      </Button>
      <Separator
        orientation="vertical"
        className="data-[orientation=vertical]:h-6 w-px ml-3 mr-6"
      />

      <div className="flex gap-3">
        <a
          href="https://github.com/rparekh01"
          className="hover:text-violet-300"
          target="_blank"
        >
          <LiaGithub className="size-7 min-w-fit" />
        </a>
        <a
          href="https://www.linkedin.com/in/r-p/"
          className="hover:text-violet-300"
          target="_blank"
        >
          <LiaLinkedin className="size-7 min-w-fit" />
        </a>
      </div>

      {/* </Button> */}
    </div>
  );
}
