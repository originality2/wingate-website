import './Gallery.css';

export default function Gallery({ images, compact = false }) {
  if (!images || images.length === 0) return null;

  const displayImages = compact ? images.slice(0, 6) : images;

  return (
    <div className={`gallery${compact ? ' gallery--compact' : ''}`}>
      <div className="gallery__grid">
        {displayImages.map((item, index) => {
          const { title, description, imageUrl } = item.fields;
          return (
            <figure
              key={item.sys.id}
              className={`gallery__item gallery__item--${(index % 3) + 1}`}
            >
              <img
                src={imageUrl}
                alt={description || title}
                className="gallery__image"
                loading="lazy"
              />
              <figcaption className="gallery__caption">{title}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
