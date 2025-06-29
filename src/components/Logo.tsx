import Link from "next/link";
import { TbCircleLetterR } from "react-icons/tb";

export function Logo() {
  return (
    <Link href="#hero" className="group">
      <TbCircleLetterR className="size-10" />
    </Link>
  );
}
