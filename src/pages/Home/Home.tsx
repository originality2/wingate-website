import { homePage } from "../../content/siteContent";
import {
  Eyebrow,
  Hero,
  HeroOverlay,
  HeroSubtitle,
  HeroTitle,
  LinksGrid,
  Main,
  Tile,
  TileDesktopLink,
  TileImage,
  TileLearnMoreButton,
  TileOverlay,
} from "./Home.styles";
import { PrimaryButtonLink } from "../../styles/pageLayout.styles";

export default function Home() {
  return (
    <Main>
      <Hero>
        <HeroOverlay>
          <Eyebrow>Ascot Vale</Eyebrow>
          <HeroTitle>{homePage.title}</HeroTitle>
          <HeroSubtitle>{homePage.subtitle}</HeroSubtitle>
          <PrimaryButtonLink to="/enrolments">
            Enrolment Information
          </PrimaryButtonLink>
        </HeroOverlay>
      </Hero>

      <LinksGrid aria-label="Site links">
        {homePage.tiles.map((tile) => (
          <Tile key={tile.to} data-reveal="true" data-visible="false">
            <TileImage
              src={tile.image}
              alt={tile.alt}
              loading="eager"
              decoding="async"
            />
            <TileOverlay>
              <h2>{tile.title}</h2>
              <p>{tile.text}</p>
              <TileLearnMoreButton to={tile.to}>Learn more</TileLearnMoreButton>
            </TileOverlay>
            <TileDesktopLink to={tile.to} aria-label={`View ${tile.title}`} />
          </Tile>
        ))}
      </LinksGrid>
    </Main>
  );
}
