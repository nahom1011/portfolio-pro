import type { CSSProperties } from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
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

            <div className="hero-photo-container">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=colman&w=200&h=200" alt="Profile" className="hero-photo" />
            </div>
            <h2 className="hero-tagline">
              Crafting Digital Experiences with <span className="highlight">Precision</span> and <span className="highlight">Elegance</span>.
            </h2>
          
          <div className="hero-cta">
            <button className="btn btn-primary">View Projects</button>
            <div className="glowing-box glowing-box-active" style={{ "--animation-speed": "2s" } as CSSProperties}>
              <div className="glowing-box-animations">
                <div className="glowing-box-glow"></div>
                <div className="glowing-box-stars-masker">
                  <div className="glowing-box-stars"></div>
                </div>
              </div>
              <div className="glowing-box-borders-masker">
                <div className="glowing-box-borders"></div>
              </div>
              <button className="glowing-box-button">
                <span className="glowing-span">contact me </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main >
    </>
  )
}

export default App
