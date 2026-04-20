import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Enrolments from './pages/Enrolments';
import OurPeople from './pages/OurPeople';
import GalleryPage from './pages/GalleryPage';
import ParentResources from './pages/ParentResources';
import Contact from './pages/Contact';
import './styles/global.css';
import './styles/site.css';
import './App.css';

function NotFound() {
  return (
    <main className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__emoji" aria-hidden="true">🔍</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__text">
          Oops! We couldn&apos;t find the page you&apos;re looking for.
        </p>
        <a href="/" className="btn btn-primary">Go Back Home</a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const shouldReduceMotion = mediaQuery.matches;

    const revealTargets = document.querySelectorAll(
      '.page-section, .soft-card, .team-card, .gallery-card, .home-tile, .content-grid'
    );

    if (shouldReduceMotion) {
      revealTargets.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    revealTargets.forEach((element) => {
      element.classList.remove('is-visible');
      element.classList.add('reveal-on-scroll');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/enrolments" element={<Enrolments />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/parent-resources" element={<ParentResources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
