import Link from "next/link";
import { TbCircleLetterR } from "react-icons/tb";

export function Logo() {
  return (
    <Link href="/" className="group">
      <TbCircleLetterR className="size-10" />
    </Link>
  );
}
