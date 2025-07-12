import Hero from "@/components/Hero";
import About from "@/components/navigation/about";
import Experience from "@/components/navigation/experience";
import Projects from "@/components/navigation/projects";

export default function Page() {
  return (
    <main>
      <div className="App">
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
      </div>
    </main>
  );
}
