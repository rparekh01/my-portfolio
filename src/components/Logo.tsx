import Link from "next/link";
import { TbCircleLetterR } from "react-icons/tb";

export function Logo() {
  return (
    <Link
      href="/"
      className="group hover:text-violet-400 hover:shadow-violet-500/10"
    >
      {/* <TbCircleLetterR className="size-10" /> */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-violet-300">
          1. Script Style
        </h3>
        <div className="flex justify-center items-center h-24">
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            className="hover:scale-105 transition-transform cursor-pointer"
          >
            <path
              d="M10 35 Q15 15 25 25 Q30 35 35 25 Q40 15 45 30 Q50 45 55 35 Q60 25 70 35 Q75 45 80 35 Q85 25 90 40 Q95 50 100 45"
              stroke="#a78bfa"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="95" cy="45" r="2" fill="#a78bfa" />
            <path
              d="M10 45 Q50 40 100 45"
              stroke="#a78bfa"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
