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
import { Main, Section } from "../../styles/pageLayout.styles";
import PageHero from "../../components/PageHero";
import { BannerImage, CarouselWrapper } from "./GalleryPage.styles";

export default function GalleryPage() {
  return (
    <Main>
      <PageHero
        title="Our Spaces"
        intro="We pride ourselves on providing safe, welcoming and engaging spaces for our children to learn and grow. Our spaces are designed to support a play-based, emergent curriculum that is responsive to children's interests and needs."
      />

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
                      <BannerImage
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                      />
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
                    <CarouselNavButton
                      aria-label={`Go to slide ${index + 1}`}
                    />
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
