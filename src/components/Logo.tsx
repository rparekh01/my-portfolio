import Link from "next/link";
import { TbCircleLetterR } from "react-icons/tb";

export function Logo() {
  return (
    <Link href="/" className="group hover:text-teal-400">
      <TbCircleLetterR className="size-10" />
    </Link>
  );
}
