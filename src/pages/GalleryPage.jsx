import { galleryImages } from '../content/siteContent';

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <section className="page-hero" aria-label="Gallery page header">
        <div className="container">
          <p className="page-eyebrow">Wingate Childcare Co-operative</p>
          <h1>Gallery</h1>
          <p className="page-intro">
            Temporary photos are in place to give the site a warm, lived-in feel while final photography is being prepared.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="gallery-grid" aria-label="Photo gallery">
            {galleryImages.map((image, index) => (
              <figure key={`${image.alt}-${index}`} className="gallery-card">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
