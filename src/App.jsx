import { domAnimation, LazyMotion, MotionConfig } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    // reducedMotion="user" makes every Motion animation respect the OS setting.
    // LazyMotion + `m` ships only the DOM animation features we actually use.
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Credentials />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </LazyMotion>
    </MotionConfig>
  );
}
