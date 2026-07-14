import { galleryImages } from "../../content/siteContent";
import {
  Container,
  Eyebrow,
  HeroSection,
  Intro,
  Main,
  Section,
} from "../../styles/pageLayout.styles";
import { GalleryCard, GalleryGrid, Image } from "./GalleryPage.styles";

export default function GalleryPage() {
  return (
    <Main>
      <HeroSection aria-label="Gallery page header">
        <Container>
          <Eyebrow>Wingate Childcare Co-operative</Eyebrow>
          <h1>Gallery</h1>
          <Intro>
            Temporary photos are in place to give the site a warm, lived-in feel
            while final photography is being prepared.
          </Intro>
        </Container>
      </HeroSection>

      <Section data-reveal="true" data-visible="false">
        <Container>
          <GalleryGrid aria-label="Photo gallery">
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={`${image.alt}-${index}`}
                data-reveal="true"
                data-visible="false"
              >
                <Image src={image.src} alt={image.alt} loading="lazy" />
              </GalleryCard>
            ))}
          </GalleryGrid>
        </Container>
      </Section>
    </Main>
  );
}
