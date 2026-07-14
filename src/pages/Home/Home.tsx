import { homePage, siteContact } from "../../content/siteContent";
import {
  ContactStrip,
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
            <TileImage src={tile.image} alt={tile.alt} />
            <TileOverlay>
              <h2>{tile.title}</h2>
              <p>{tile.text}</p>
              <TileLearnMoreButton to={tile.to}>Learn more</TileLearnMoreButton>
            </TileOverlay>
            <TileDesktopLink to={tile.to} aria-label={`View ${tile.title}`} />
          </Tile>
        ))}
      </LinksGrid>

      <ContactStrip data-reveal="true" data-visible="false">
        <div>
          <h2>Contact Wingate</h2>
          <p>{siteContact.address}</p>
        </div>
        <div>
          <a href={`tel:${siteContact.phone.replace(/\D/g, "")}`}>
            {siteContact.phone}
          </a>
          <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
        </div>
      </ContactStrip>
    </Main>
  );
}
