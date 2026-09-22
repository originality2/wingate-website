import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Enrolments from "../pages/Enrolments";
import ChildSafePractice from "../pages/ChildSafePractice";
import OurPeople from "../pages/OurPeople";
import GalleryPage from "../pages/GalleryPage";
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
        <NotFoundEmoji aria-hidden="true">🤷‍♀️</NotFoundEmoji>
        <NotFoundTitle>Page Not Found</NotFoundTitle>
        <NotFoundText>Nothing to see here... Unless 👀</NotFoundText>
        <PrimaryLinkButton href="/">Go Back Home</PrimaryLinkButton>
      </NotFoundInner>
    </NotFoundMain>
  );
}

function getBasename() {
  const pathname = window.location.pathname;

  if (pathname.startsWith("/wingate-website/")) {
    return "/wingate-website";
  }

  return "/";
}

export default function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <GlobalStyles />
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTarget = new URLSearchParams(window.location.search).get(
      "redirect",
    );

    if (!redirectTarget || location.pathname !== "/") {
      return;
    }

    navigate(redirectTarget, { replace: true });
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (!import.meta.env.DEV) {
      return;
    }

    if (!("fonts" in document) || !document.fonts) {
      return;
    }

    const logFontDiagnostics = () => {
      const bodyFamily = window.getComputedStyle(document.body).fontFamily;
      const headingElement = document.querySelector("h1, h2, h3");
      const headingFamily = headingElement
        ? window.getComputedStyle(headingElement).fontFamily
        : "<no heading found>";
      const dmSansLoaded = document.fonts.check("16px 'DM Sans'");
      const frauncesLoaded = document.fonts.check("16px 'Fraunces'");

      console.info("[font-diagnostics]", {
        dmSansLoaded,
        frauncesLoaded,
        bodyFamily,
        headingFamily,
      });
    };

    void document.fonts.ready.then(logFontDiagnostics);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <Route path="/child-safe-practice" element={<ChildSafePractice />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
