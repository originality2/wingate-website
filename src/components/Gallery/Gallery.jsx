import './Gallery.css';

export default function Gallery({ images, compact = false }) {
  if (!images || images.length === 0) return null;

  const displayImages = compact ? images.slice(0, 6) : images;

  return (
    <div className={`gallery${compact ? ' gallery--compact' : ''}`}>
      <div className="gallery__grid">
        {displayImages.map((item, index) => {
          const imageUrl = item.imageUrl || item.image?.file?.url || item.file?.url;
          return (
            <figure
              key={item.id || item.sys?.id || `${item.title}-${index}`}
              className={`gallery__item gallery__item--${(index % 3) + 1}`}
            >
              <img
                src={imageUrl}
                alt={item.description || item.title}
                className="gallery__image"
                loading="lazy"
              />
              <figcaption className="gallery__caption">{item.title}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
