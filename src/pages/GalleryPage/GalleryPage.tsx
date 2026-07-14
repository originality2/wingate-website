import {
  Carousel,
  CarouselCard,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselSlider,
  CarouselViewport,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import { galleryImages } from "../../content/siteContent";
import {
  Container,
  Eyebrow,
  HeroSection,
  Intro,
  Main,
  Section,
} from "../../styles/pageLayout.styles";
import { BannerImage, CarouselWrapper } from "./GalleryPage.styles";

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
        <CarouselWrapper>
          <FluentProvider theme={webLightTheme}>
            <Carousel groupSize={1} circular aria-label="Photo gallery">
              <CarouselViewport>
              <CarouselSlider>
                {galleryImages.map((image, index) => (
                  <CarouselCard
                    key={`${image.alt}-${index}`}
                    aria-label={`Slide ${index + 1} of ${galleryImages.length}: ${image.alt}`}
                  >
                    <BannerImage src={image.src} alt={image.alt} />
                  </CarouselCard>
                ))}
              </CarouselSlider>
              </CarouselViewport>
              <CarouselNavContainer
                layout="overlay-expanded"
                next={{ "aria-label": "Next photo" }}
                prev={{ "aria-label": "Previous photo" }}
              >
                <CarouselNav>
                  {(index) => (
                    <CarouselNavButton aria-label={`Go to slide ${index + 1}`} />
                  )}
                </CarouselNav>
              </CarouselNavContainer>
            </Carousel>
          </FluentProvider>
        </CarouselWrapper>
      </Section>
    </Main>
  );
}
