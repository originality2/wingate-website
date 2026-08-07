import { aboutPage, galleryImages } from "../../content/siteContent";
import {
  Container,
  Eyebrow,
  HeroSection,
  Intro,
  Main,
  ContentGrid,
  ImagePanel,
  RoundedMedia,
  Section,
  TextPanel,
} from "../../styles/pageLayout.styles";

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
              Since 1975, Wingate has been more than an early childhood service
              - it's been a <b>true community</b>. We've always believed{" "}
              <b>it takes a village to raise a child</b>, and that belief still
              shapes everything we do today. We're so grateful for the chance to
              keep building a place where children and families feel genuinely
              supported, deeply connected, and truly valued.
            </p>
            <p>
              As a co-operative, community isn't just part of what we do - it's
              at the very heart of it. We're committed to giving every child and
              family access to high-quality early learning and care, with a
              special focus on supporting families in our local housing
              community. These connections are what make us who we are, and by
              nurturing them, we continue to be a place where community,
              belonging and relationship shine as our greatest strengths.
            </p>
          </TextPanel>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              loading="lazy"
            />
          </ImagePanel>
        </ContentGrid>
      </Section>

      <Section id="philosophy" data-reveal="true" data-visible="false">
        <ContentGrid>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              loading="lazy"
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
