import {
  galleryImages,
  programGroups,
  programPage,
} from "../../content/siteContent";
import {
  CardGrid,
  Container,
  ContentGrid,
  Eyebrow,
  HeroSection,
  ImagePanel,
  Intro,
  Main,
  PrimaryButtonLink,
  Section,
  SoftCard,
  TextPanel,
  RoundedMedia,
} from "../../styles/pageLayout.styles";

export default function Programs() {
  return (
    <Main>
      <HeroSection aria-label="Program page header">
        <Container>
          <Eyebrow>Wingate Childcare Co-operative</Eyebrow>
          <h1>{programPage.title}</h1>
          <Intro>{programPage.intro}</Intro>
        </Container>
      </HeroSection>

      <Section id="pedagogy" data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel>
            <h2>Pedagogy</h2>
            <p>
              We aim for a balance between adult-led, child-initiated, and
              shared learning experiences. Intentional teaching at Wingate is
              deliberate, purposeful, and responsive to children&apos;s emerging
              interests.
            </p>
            <p>
              Our emergent curriculum is shaped through observation,
              documentation, family input, and community context. Programs are
              play-based, informed by Reggio Emilia, and aligned with the
              Victorian Early Years Learning Framework.
            </p>
          </TextPanel>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
            />
          </ImagePanel>
        </ContentGrid>
      </Section>

      <Section id="age-groups" $alt data-reveal="true" data-visible="false">
        <Container>
          <h2>Seeds, Seedlings & Sprouts</h2>
          <p>
            Wingate provides education and care from 6 weeks onwards, including
            funded 3-year-old and 4-year-old kindergarten pathways within the
            curriculum.
          </p>
          <CardGrid>
            {programGroups.map((group) => (
              <SoftCard
                key={group.name}
                data-reveal="true"
                data-visible="false"
              >
                <Eyebrow>{group.ages}</Eyebrow>
                <h3>{group.name}</h3>
                <p>{group.summary}</p>
              </SoftCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section id="meals" data-reveal="true" data-visible="false">
        <ContentGrid>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
            />
          </ImagePanel>
          <TextPanel>
            <h2>Meals & Nutrition</h2>
            <p>
              The centre provides a breakfast program (until 8am), morning tea,
              lunch, afternoon tea, and a late snack. Menus support
              children&apos;s wellbeing and dietary requirements.
            </p>
            <p>
              Wingate also supplies nappies, wipes, sunscreen, and
              children&apos;s bedding as part of the daily program.
            </p>
            <PrimaryButtonLink to="/parent-resources">
              View Sample Menu
            </PrimaryButtonLink>
          </TextPanel>
        </ContentGrid>
      </Section>
    </Main>
  );
}
