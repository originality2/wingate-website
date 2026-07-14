import type { GalleryItem } from "../../types/content";
import { Caption, GalleryRoot, Grid, Image, Item } from "./Gallery.styles";

type GalleryProps = {
  images: GalleryItem[];
  compact?: boolean;
};

export default function Gallery({ images, compact = false }: GalleryProps) {
  if (!images || images.length === 0) return null;

  const displayImages = compact ? images.slice(0, 6) : images;

  return (
    <GalleryRoot>
      <Grid $compact={compact}>
        {displayImages.map((item, index) => {
          const imageUrl =
            item.imageUrl || item.image?.file?.url || item.file?.url;
          const altText = item.description || item.title || "Gallery image";
          return (
            <Item
              key={item.id || item.sys?.id || `${item.title}-${index}`}
              $wide={index === 3}
            >
              <Image src={imageUrl} alt={altText} loading="lazy" />
              <Caption>{item.title}</Caption>
            </Item>
          );
        })}
      </Grid>
    </GalleryRoot>
  );
}
