import Gallery from '../components/Gallery/Gallery';
import { mockGalleryImages } from '../lib/mockData';
import { useContentfulEntries } from '../hooks/useContentful';
import './About.css';
import './GalleryPage.css';

export default function GalleryPage() {
  const { data: images } = useContentfulEntries('galleryImage', mockGalleryImages);

  return (
    <main>
      <section className="page-hero page-hero--blue" aria-label="Gallery page header">
        <div className="container page-hero__inner">
          <h1 className="page-hero__title">Our Gallery</h1>
          <p className="page-hero__subtitle">
            A glimpse into the joy, creativity, and learning happening every day at Wingate Childcare.
          </p>
        </div>
      </section>

      <section className="gallery-page section">
        <div className="container">
          <Gallery images={images} />
        </div>
      </section>
    </main>
  );
}
