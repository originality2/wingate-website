import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import './styles/global.css';
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
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
