import { domMax, LazyMotion, MotionConfig } from 'motion/react';
import Backdrop from './components/Backdrop';
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
    // LazyMotion + `m` keeps the animation runtime out of the initial chunk.
    // domMax (not domAnimation) is required because the project cards use
    // layoutId for the shared-element transition into the detail dialog.
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domMax} strict>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Backdrop />
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
