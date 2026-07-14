import { aboutPage, galleryImages } from "../../content/siteContent";
import {
  Container,
  ContentGrid,
  Eyebrow,
  HeroSection,
  ImagePanel,
  Intro,
  Main,
  RoundedMedia,
  Section,
  TextPanel,
} from "./About.styles";

export default function About() {
  return (
    <Main>
      <HeroSection aria-label="About page header">
        <Container>
          <Eyebrow>Wingate Childcare Co-operative</Eyebrow>
          <h1>{aboutPage.title}</h1>
          <Intro>{aboutPage.intro}</Intro>
        </Container>
      </HeroSection>

      <Section id="history" data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel>
            <h2>History</h2>
            <p>
              Wingate Avenue Children&apos;s Co-Operative first opened in 1975
              and has provided education and care for local families ever since.
              The service is a 70-place, not-for-profit long day care centre for
              children aged 6 weeks to 6 years.
            </p>
            <p>
              As a community co-operative, Wingate is governed by a volunteer
              Committee of Management alongside centre leadership. This
              structure helps maintain strong family voice, community access,
              and quality investment in educators and learning environments.
            </p>
          </TextPanel>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
            />
          </ImagePanel>
        </ContentGrid>
      </Section>

      <Section id="philosophy" $alt data-reveal="true" data-visible="false">
        <ContentGrid>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
            />
          </ImagePanel>
          <TextPanel>
            <h2>Philosophy</h2>
            <p>
              We acknowledge the Wurundjeri Woi-Wurrung People of the Kulin
              Nation and pay our respects to Elders past, present, and emerging.
              Wingate&apos;s philosophy centres relationships with children,
              families, and community.
            </p>
            <p>
              Inspired by Reggio Emilia, we see children as capable, curious
              learners and educators as thoughtful guides. We value play as
              learning, inclusion, compassion, and wellbeing so that every child
              and family experiences belonging.
            </p>
          </TextPanel>
        </ContentGrid>
      </Section>
    </Main>
  );
}
