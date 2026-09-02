import { peoplePage, teamMembers } from "../../content/siteContent";
import {
  Container,
  Eyebrow,
  Main,
  Section,
} from "../../styles/pageLayout.styles";
import PageHero from "../../components/PageHero";
import { TeamBody, TeamCard, TeamGrid, TeamImage } from "./OurPeople.styles";

export default function OurPeople() {
  return (
    <Main>
      <PageHero title={peoplePage.title} intro={peoplePage.intro} />

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
                  loading="lazy"
                />
                <TeamBody>
                  <h3>{member.name}</h3>
                  <Eyebrow>{member.role}</Eyebrow>
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
