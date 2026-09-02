import {
  Container,
  Eyebrow,
  HeroSection,
  Intro,
} from "../../styles/pageLayout.styles";

type PageHeroProps = {
  title: string;
  intro: string;
};

export default function PageHero({ title, intro }: PageHeroProps) {
  return (
    <HeroSection aria-label={`${title} page header`}>
      <Container>
        <Eyebrow>Wingate Childcare Co-operative</Eyebrow>
        <h1>{title}</h1>
        <Intro>{intro}</Intro>
      </Container>
    </HeroSection>
  );
}
