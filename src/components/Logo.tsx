import Link from "next/link";
import { TbCircleLetterR } from "react-icons/tb";

export function Logo() {
  return (
    <Link
      href="/"
      className="group hover:text-violet-400 hover:shadow-violet-500/10"
    >
      <div className="relative">
        {/* Home icon outline with R inside */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="hover:drop-shadow-lg transition-all duration-300"
        >
          {/* House outline */}
          <path
            d="M24 6L8 20v20h32V20L24 6z"
            stroke="rgb(168 85 247)"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="group-hover:stroke-violet-300 transition-colors duration-300"
          />

          {/* R letter in the center */}
          <text
            x="24"
            y="28"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-lg font-mono font-bold fill-violet-400 group-hover:fill-violet-300 transition-colors duration-300 select-none"
          >
            R
          </text>
        </svg>

        {/* Optional: Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-violet-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
      </div>
    </Link>
  );
}
