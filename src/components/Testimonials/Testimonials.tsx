import type { Testimonial } from "../../types/content";
import {
  Author,
  AuthorMeta,
  AuthorName,
  AuthorTitle,
  Avatar,
  Container,
  HeaderBlock,
  QuoteIcon,
  QuoteText,
  SectionSubtitle,
  SectionTitle,
  TestimonialCardRoot,
  TestimonialsGrid,
  TestimonialsSection,
} from "./Testimonials.styles";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { quote, authorName, authorTitle } = testimonial;
  return (
    <TestimonialCardRoot>
      <QuoteIcon
        viewBox="0 0 40 40"
        width="40"
        height="40"
        fill="none"
        aria-hidden="true"
      >
        <text
          x="0"
          y="36"
          fontSize="52"
          fontFamily="Georgia, serif"
          fill="var(--color-primary-light)"
          opacity="0.3"
        >
          "
        </text>
      </QuoteIcon>
      <QuoteText>{quote}</QuoteText>
      <Author>
        <Avatar aria-hidden="true">{authorName.charAt(0)}</Avatar>
        <AuthorMeta>
          <AuthorName>{authorName}</AuthorName>
          <AuthorTitle>{authorTitle}</AuthorTitle>
        </AuthorMeta>
      </Author>
    </TestimonialCardRoot>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <TestimonialsSection aria-label="Parent testimonials">
      <Container>
        <HeaderBlock>
          <SectionTitle>What Parents Say</SectionTitle>
          <SectionSubtitle>
            Don&apos;t just take our word for it – hear from the families who
            trust us with their most precious ones.
          </SectionSubtitle>
        </HeaderBlock>

        <TestimonialsGrid>
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id || t.sys?.id || t.authorName}
              testimonial={t}
            />
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
}
