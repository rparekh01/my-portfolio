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
            <span className="text-teal-400">▹</span>
            Technical Background
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Hello! My name is Raj Parekh. I have been building web
              applications in the finance/insurance industry for 4+ years with
              React, TypeScript, Spring Boot and a bit of Python. I also quite
              often dive into SQL when I need the database admins to create new
              tables. I have also learned a niche framework like{" "}
              <span className="text-teal-400 font-medium">Three.js</span> to
              integrate 3D into react apps which is absolutely fascinating to
              me.
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-slate-700" />

        {/* My Journey Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-teal-400">▹</span>
            My Journey
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              My interest in software development started because of video
              games, I wanted to understand how they worked. So I started to
              learn how to build video games through online tutorials, and
              quickly realized my interest in coding. So I enrolled in college
              with major in computer science. Fast forward few years and I
              finally started my journey in software engineering industry in
              2021 after graduating with a{" "}
              <span className="text-teal-400 font-medium">
                Master of Computer Science
              </span>{" "}
              from University of Central Florida.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Development Philosophy Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-teal-400">▹</span>
            Development Philosophy
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I love to build apps that can deliver seamless user experience and
              are also developed with developer experience in mind. Before
              starting to develop the app, I like to think about{" "}
              <span className="text-teal-400 font-medium">
                why am I building this
              </span>{" "}
              and what problem will it solve?
            </p>
            <p>
              If this is an enterprise level app then it is obvious that this
              question has been answered but even then if the ongoing project is
              being enhanced with new features, this question is still vital.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Technical Approach Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-teal-400">▹</span>
            Technical Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-200">
                Frontend Development
              </h3>
              <p className="text-slate-300 leading-relaxed">
                When I&apos;m working on creating UI, I love to create seamless
                user experience, I like to put myself in the shoes of users and
                ensure every interaction feels natural and intuitive.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-200">
                Backend Development
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I think that API development requires a lot of focus on
                architecture, optimization, seamless data validation between
                front-end and back-end and structuring data in a meaningful way.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />
      </div>
    </section>
  );
}
