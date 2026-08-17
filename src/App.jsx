import { domMax, LazyMotion, MotionConfig } from 'motion/react';
import Backdrop from './components/Backdrop';
import MediaProtection from './components/MediaProtection';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { anthropicCertificates, komdigiCertificates } from './data/site';

const credentialIssuers = [
  {
    id: 'komdigi',
    name: 'Komdigi Digital Talent',
    logo: '/certificates/logos/komdigi.jpg',
    description:
      'Digital upskilling certificates from the Indonesian Ministry of Communication and Digital Affairs (Kementerian Komunikasi dan Digital).',
    count: komdigiCertificates.length,
    certificates: komdigiCertificates,
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    logo: '/certificates/logos/anthropic.jpg',
    description:
      'AI fluency and Claude platform certificates issued through Anthropic’s Skilljar learning platform.',
    count: anthropicCertificates.length,
    certificates: anthropicCertificates,
  },
];

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
        <MediaProtection />
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Credentials issuers={credentialIssuers} />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </LazyMotion>
    </MotionConfig>
  );
}
