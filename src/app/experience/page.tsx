export default function Experience() {
  return (
    <section id="#experience" className="page-layout">
      <div className="page-container">
        <h1 className="text-4xl md:text-4xl font-bold text-slate-200 mb-4 underline decoration-teal-400">
          Experience
        </h1>
        <a
          href="https://www.magmutual.com/"
          className="text-2xl md:text-2xl font-bold  mb-4 text-teal-400 hover:text-teal-200"
        >
          MagMutual Insurance Company
        </a>
        <h2 className="text-lg md:text-lg font-bold text-slate-200 mb-4">
          Full-stack Software Engineer
          <p className="text-sm md:text-sm font-bold text-slate-400 mb-4">
            Aug 2021 - Present
          </p>
        </h2>
        <div className="pb-4">
          <a
            href="https://www.magmutual.com/products/onemodel"
            className="text-m md:text-m font-bold mb-4 text-teal-400 hover:text-teal-200"
          >
            MagMutual enterprise application
          </a>
          <p className="text-slate-300 max-w-2xl">
            A specialized sales application that can retrieve policies of
            clients, provide exceptional visualization of insurace coverage
            using 3D simulation and generate optimized coverages.
          </p>
        </div>
        <h2 className="text-lg md:text-lg font-bold text-slate-200 pb-1">
          Responsibilities
        </h2>
        <p className="text-slate-400 max-w-2xl">As a full-stack engieer,</p>
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
              springBoot API using JUnit. My team has achieved and maintined 80%
              test coverage for every repository that we own!
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

// I&apos;m focusing on
//           developing a highly personlized
//           <a
//             href="https://www.magmutual.com/products/onemodel"
//             className="px-1 text-teal-400 hover:text-teal-200"
//           >
//             product
//           </a>
//           at
//           <a
//             href="https://www.magmutual.com/"
//             className="pl-1 text-teal-400 hover:text-teal-200"
//           >
//             MagMutual
//           </a>
//           .
