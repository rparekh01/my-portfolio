export default function Hero() {
  return (
    <section id="hero" className="page-layout">
      <div className="page-container">
        <p className="text-teal-400 font-mono text-sm mb-4">Hi, My name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">
          Raj Parekh
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
          I build web applications.
        </h2>
        <p className="text-slate-200 text-lg mb-12 leading-relaxed max-w-2xl">
          I&apos;m full-stack software engineer specializing in building
          exceptional digital experinces. Currently, I&apos;m focusing on
          developing a highly personlized
          <a
            href="https://www.magmutual.com/products/onemodel"
            className="px-1 text-teal-400 hover:text-teal-200"
          >
            product
          </a>
          at
          <a
            href="https://www.magmutual.com/"
            className="pl-1 text-teal-400 hover:text-teal-200"
          >
            MagMutual
          </a>
          .
        </p>
      </div>
    </section>
  );
}
