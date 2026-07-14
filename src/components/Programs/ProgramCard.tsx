import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import type { Program } from "../../types/content";
import {
  Age,
  CardBody,
  Description,
  FeaturedBadge,
  Icon,
  IconWrap,
  LearnMoreLink,
  ProgramCardArticle,
  Title,
} from "./ProgramCard.styles";

type ProgramCardProps = {
  program: Program;
  featured?: boolean;
};

export default function ProgramCard({
  program,
  featured = false,
}: ProgramCardProps) {
  const { title, ageRange, description, icon, color } = program;
  const cardStyle = { "--card-color": color } as CSSProperties;

  return (
    <ProgramCardArticle $featured={featured} style={cardStyle}>
      {featured && <FeaturedBadge>Popular</FeaturedBadge>}
      <IconWrap>
        <Icon aria-hidden="true">{icon}</Icon>
      </IconWrap>
      <CardBody>
        <Age>{ageRange}</Age>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LearnMoreLink as={Link} to="/contact">
          Learn more
          <svg
            viewBox="0 0 16 16"
            width="14"
            height="14"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
            />
          </svg>
        </LearnMoreLink>
      </CardBody>
    </ProgramCardArticle>
  );
}
