export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-slate-900 text-white flex items-center"
    >
      <div className="container mx-auto px-6">
        <p className="text-teal-400 font-mono text-sm mb-4">Hi, My name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">
          Raj Parekh
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
          I build web applications.
        </h2>
        <p className="text-slate-200 text-lg mb-12 leading-relaxed max-w-2xl">
          I&apos;m full-stack software engineer specializing in building
          exception digital experinces. Currently, I&aposm focusing on building
          a highly personlized sales application for insurance agents at
          MagMutual Insurance Company.
        </p>
      </div>
    </section>
  );
}
