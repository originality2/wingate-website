import { Link } from "react-router-dom";
import type { HeroContent } from "../../types/content";
import {
  Backdrop,
  Badge,
  CardsGrid,
  Headline,
  HeroActions,
  HeroContentGrid,
  HeroSection,
  HeroText,
  PrimaryHeroButtonLink,
  SecondaryHeroButtonLink,
  StatCard,
  StatIcon,
  StatLabel,
  StatValue,
  Subheading,
  Wave,
} from "./Hero.styles";

type HeroProps = {
  content: HeroContent;
};

export default function Hero({ content }: HeroProps) {
  const { headline, subheading, primaryCta, secondaryCta } = content;

  return (
    <HeroSection aria-label="Welcome to Wingate Childcare">
      <Backdrop aria-hidden="true" />
      <HeroContentGrid>
        <HeroText>
          <Badge>Nurturing Futures Since 2004</Badge>
          <Headline>
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </Headline>
          <Subheading>{subheading}</Subheading>
          <HeroActions>
            <PrimaryHeroButtonLink as={Link} to={primaryCta.href}>
              {primaryCta.label}
              <svg
                viewBox="0 0 20 20"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </PrimaryHeroButtonLink>
            <SecondaryHeroButtonLink as={Link} to={secondaryCta.href}>
              {secondaryCta.label}
            </SecondaryHeroButtonLink>
          </HeroActions>
        </HeroText>

        <CardsGrid aria-hidden="true">
          <StatCard>
            <StatIcon>👶</StatIcon>
            <StatValue>6 wks+</StatValue>
            <StatLabel>Age from</StatLabel>
          </StatCard>
          <StatCard $accent>
            <StatIcon>⭐</StatIcon>
            <StatValue>5-Star</StatValue>
            <StatLabel>Rated</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon>🏫</StatIcon>
            <StatValue>4</StatValue>
            <StatLabel>Programs</StatLabel>
          </StatCard>
          <StatCard $green>
            <StatIcon>❤️</StatIcon>
            <StatValue>150+</StatValue>
            <StatLabel>Families</StatLabel>
          </StatCard>
        </CardsGrid>
      </HeroContentGrid>

      <Wave aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
            fill="var(--color-bg)"
          />
        </svg>
      </Wave>
    </HeroSection>
  );
}
