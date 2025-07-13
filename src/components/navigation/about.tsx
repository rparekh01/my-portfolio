// import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section className="page-layout">
      <div className="page-container">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-4xl font-bold text-slate-200 pb-12 underline decoration-teal-400">
              About Me
            </h1>
          </div>
        </div>

        {/* Technical Background Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-violet-400">▹</span>
            Technical Background
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Hello! I&apos;m Raj Parekh, a full-stack engineer with 4+ years
              building web applications in finance/insurance industry. My
              toolkit includes React, TypeScript, Spring Boot, Python, and SQL
              for database work.
            </p>
            <p>
              I&apos;ve also explored{" "}
              <span className="text-violet-400 font-medium">Three.js</span> for
              3D web integration, which opened up fascinating possibilities for
              interactive experiences.
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-slate-700" />

        {/* My Journey Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-violet-400">▹</span>
            My Journey
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Video games sparked my interest in coding—I wanted to understand
              how they worked. This curiosity led me to computer science, and
              eventually to a{" "}
              <span className="text-violet-400 font-medium">
                Master of Computer Science
              </span>{" "}
              from UCF. I started my professional journey in 2021.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Development Philosophy Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-violet-400">▹</span>
            Development Philosophy
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I build applications that deliver seamless user experiences while
              prioritizing developer experience. Before coding, I always ask:{" "}
              <span className="text-violet-400 font-medium">
                &quot;Why am I building this?&quot;
              </span>{" "}
              Understanding the problem being solved drives better solutions,
              whether it&apos;s a new app or enhancing existing features.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Technical Approach Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-violet-400">▹</span>
            Technical Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-200">
                Frontend Development
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I focus on creating intuitive interfaces by putting myself in
                users&apos; shoes. Every interaction should feel natural and
                effortless.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-200">
                Backend Development
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I believe that API development requires solid architecture,
                optimization, and seamless data validation. I structure data
                meaningfully for both frontend consumption and maintainability.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />
      </div>
    </section>
  );
}
