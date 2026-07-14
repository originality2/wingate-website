import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Enrolments from "../pages/Enrolments";
import OurPeople from "../pages/OurPeople";
import GalleryPage from "../pages/GalleryPage";
import ParentResources from "../pages/ParentResources";
import Contact from "../pages/Contact";
import {
  AppContainer,
  GlobalStyles,
  MainContent,
  NotFoundEmoji,
  NotFoundInner,
  NotFoundMain,
  NotFoundText,
  NotFoundTitle,
  PrimaryLinkButton,
} from "./App.styles";

function NotFound() {
  return (
    <NotFoundMain>
      <NotFoundInner>
        <NotFoundEmoji aria-hidden="true">🔍</NotFoundEmoji>
        <NotFoundTitle>Page Not Found</NotFoundTitle>
        <NotFoundText>
          Oops! We couldn&apos;t find the page you&apos;re looking for.
        </NotFoundText>
        <PrimaryLinkButton href="/">Go Back Home</PrimaryLinkButton>
      </NotFoundInner>
    </NotFoundMain>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shouldReduceMotion = mediaQuery.matches;

    const revealTargets = document.querySelectorAll("[data-reveal='true']");

    if (shouldReduceMotion) {
      revealTargets.forEach((element) => {
        element.setAttribute("data-visible", "true");
      });
      return;
    }

    revealTargets.forEach((element) => {
      element.setAttribute("data-visible", "false");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <AppContainer>
      <Header />
      <MainContent>
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
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
