import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section className="page-layout">
      <div className="page-container">
        <h1 className="text-4xl md:text-4xl font-bold text-slate-200 pb-12 underline decoration-teal-400">
          Experience
        </h1>
        <a
          href="https://www.magmutual.com/"
          className=" display: block text-2xl md:text-2xl font-bold pb-6 text-teal-400 hover:text-teal-200"
        >
          MagMutual Insurance Company
        </a>

        <h2 className="text-lg md:text-lg font-bold text-slate-200 pb-1">
          Full-stack Software Engineer
        </h2>
        <p className="text-sm md:text-sm font-bold text-slate-400 pb-4">
          Aug 2021 - Present
        </p>

        <div className="pb-4">
          <a
            href="https://www.magmutual.com/products/onemodel"
            className=" display: block text-m md:text-m font-bold pb-1 text-teal-400 hover:text-teal-200"
          >
            MagMutual enterprise application
          </a>
          <p className="text-slate-300 max-w-2xl">
            A specialized sales application that can retrieve policies of
            clients, provide exceptional visualization of insurance coverage
            using 3D simulation and generate optimized coverages.
          </p>
        </div>
        <h2 className="text-lg md:text-lg font-bold text-slate-200 pb-1">
          Responsibilities
        </h2>
        <p className="text-slate-400 max-w-2xl pb-1">
          As a full-stack engineer,
        </p>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="text-teal-400 flex-shrink-0">▹</span>
            <span className="text-slate-300">
              I develop an enterprise level application using React and
              TypeScript for frontend, Java/SpringBoot for backend, and also a
              Python API for specialized policy calculations.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-teal-400  flex-shrink-0">▹</span>
            <span className="text-slate-300">
              collaborate with the design team by offering programmatic insights
              to guide design decisions for enterprise applications.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-teal-400 flex-shrink-0">▹</span>
            <span className="text-slate-300">
              Create and maintain interactive 3D components using Three.js for
              data visualization.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-teal-400 flex-shrink-0">▹</span>
            <span className="text-slate-300">
              Write integration tests for UI using Playwright and unit tests for
              springBoot API using JUnit. My team has achieved and maintained
              80% test coverage for every repository that we own!
            </span>
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">
            Technologies I&apos;m actively working with actively
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              React
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              TypeScript
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              JavaScript
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              Spring Boot
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              Java
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              Python
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              Three.js
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              SQL
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              Playwright
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              JUnit
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              Next.js
            </Badge>
            <Badge
              variant="secondary"
              className="bg-slate-800 text-teal-400 hover:bg-slate-700"
            >
              Tailwind CSS
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
