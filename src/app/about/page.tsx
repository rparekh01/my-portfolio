// import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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

          {/* Profile Photo */}
          {/* <div className="flex-shrink-0">
            <Image
              src="/images/image-2.jpg"
              alt="Raj Parekh"
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>

        {/* Technical Background Section */}

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-teal-400">▹</span>
            Technical Background
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I have 4+ years of building web applications in the
              healthcare/insurance industry with React, TypeScript, Spring Boot
              and a bit of Python. I also quite often dive into SQL when I need
              the database admins to create new tables. I have also learned a
              niche framework like{" "}
              <span className="text-teal-400 font-medium">Three.js</span> to
              integrate 3D into react apps which is absolutely fascinating to
              me.
            </p>
            <p>
              While I cannot go into too much details, one of the project that I
              am actively working on at my current company, uses{" "}
              <span className="text-teal-400 font-medium">
                3D for data visualization
              </span>
              . I have also started to integrate AI IDE like VS Code with
              Copilot and Cursor in my development suite for both professionally
              and for my personal projects.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* My Journey Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-teal-400">▹</span>
            My Journey
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              My interest in software development started because of video
              games, I wanted to understand how they worked. So I started to
              learn how to build video games through online tutorials, I even
              enrolled in college as Animation major but quickly realized my
              interest in coding because I wanted to go even deeper and learn
              how the software that is used to create animations are built.
            </p>
            <p>
              So I switched my major to computer science. I finally started my
              journey in software engineering industry in 2021 after I graduated
              with a{" "}
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
          <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
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
          <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-teal-400">▹</span>
            Technical Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-200">
                Frontend Development
              </h3>
              <p className="text-slate-300 leading-relaxed">
                When I'm working on creating UI, I love to create seamless user
                experience, I like to put myself in the shoes of users and
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

        {/* Quality & Testing Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-teal-400">▹</span>
            Quality & Testing
          </h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-300 leading-relaxed">
              I've also helped achieve{" "}
              <span className="text-teal-400">80% test coverage</span> for all
              of the repositories owned by my team using{" "}
              <span className="text-teal-400 font-medium">Playwright</span> for
              integration testing and{" "}
              <span className="text-teal-400 font-medium">JUnit</span> for the
              APIs while also scanning code to maintain industry standard before
              pushing to production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
