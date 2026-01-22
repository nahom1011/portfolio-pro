import { useState, type CSSProperties } from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/Section/About';
import Skills from './components/Section/Skills';
import Projects from './components/Section/Projects';
import Contact from './components/Section/Contact';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import Toast from './components/Toast/Toast';
import './App.css';

function App() {
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({
    message: '',
    type: 'success' as 'success' | 'error',
    isVisible: false
  });

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
  };

  return (
    <>
      <Background />
      <Navbar />
      <LoadingOverlay isVisible={isSending} />
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
      <main className={isSending ? 'content-blur' : ''}>
        <Hero />

        <section className="intro-section">
          <div className="intro-content">

            <div className="hero-photo-container">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=colman&w=200&h=200" alt="Profile" className="hero-photo" />
            </div>
            <h2 className="hero-tagline">
              WEB Developer, <span className="highlight">Bot Architect</span>, <span className="highlight">Cybersecurity Enthusiast</span>, and <span className="highlight">CCTV Installer</span> — Crafting Solutions with <span className="highlight">Precision</span> and <span className="highlight">Excellence</span>.
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
        <Contact
          onSendStart={() => setIsSending(true)}
          onSendEnd={() => setIsSending(false)}
          onMessageSent={(msg: string, type: 'success' | 'error') => showToast(msg, type)}
        />
      </main >
    </>
  )
}

export default App
