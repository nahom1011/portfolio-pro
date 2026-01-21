import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import About from './components/Section/About';
import Skills from './components/Section/Skills';
import Projects from './components/Section/Projects';
import Contact from './components/Section/Contact';
import './App.css';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />

        <section className="intro-section">
          <div className="intro-content">
            <ScrollReveal>
              <h2 className="hero-tagline">
                Crafting Digital Experiences with <span className="highlight">Precision</span> and <span className="highlight">Elegance</span>.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="hero-cta">
                <button className="btn btn-primary">View Projects</button>
                <button className="btn btn-secondary">Get in Touch</button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
    </>
  )
}

export default App
