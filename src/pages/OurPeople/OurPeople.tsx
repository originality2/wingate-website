import { peoplePage, teamMembers } from "../../content/siteContent";
import {
  CardEyebrow,
  Container,
  Eyebrow,
  HeroSection,
  Intro,
  Main,
  Section,
  TeamBody,
  TeamCard,
  TeamGrid,
  TeamImage,
} from "./OurPeople.styles";

export default function OurPeople() {
  return (
    <Main>
      <HeroSection aria-label="Our People page header">
        <Container>
          <Eyebrow>Wingate Childcare Co-operative</Eyebrow>
          <h1>{peoplePage.title}</h1>
          <Intro>{peoplePage.intro}</Intro>
        </Container>
      </HeroSection>

      <Section id="team" data-reveal="true" data-visible="false">
        <Container>
          <h2>Team</h2>
          <p>
            Wingate&apos;s management structure includes the Committee of
            Management, Centre Director, Administrator/Educational Leader, room
            leaders, and centre teams working collaboratively.
          </p>
          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamCard
                key={`${member.name}-${member.role}`}
                data-reveal="true"
                data-visible="false"
              >
                <TeamImage
                  src={member.image}
                  alt={`${member.name} at Wingate Childcare`}
                />
                <TeamBody>
                  <h3>{member.name}</h3>
                  <CardEyebrow>{member.role}</CardEyebrow>
                  <p>{member.bio}</p>
                </TeamBody>
              </TeamCard>
            ))}
          </TeamGrid>
        </Container>
      </Section>
    </Main>
  );
}
