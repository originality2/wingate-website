import { peoplePage, teamMemberGroups } from "../../content/siteContent";
import {
  Eyebrow,
  Main,
  Section,
  TextPanel,
} from "../../styles/pageLayout.styles";
import PageHero from "../../components/PageHero";
import {
  TeamBody,
  TeamCard,
  TeamGrid,
  TeamGroup,
  TeamImage,
  TeamQualification,
} from "./OurPeople.styles";

export default function OurPeople() {
  return (
    <Main>
      <PageHero title={peoplePage.title} intro={peoplePage.intro} />

      <Section id="team" data-reveal="true" data-visible="false">
        <TextPanel>
          <h2>Team</h2>
          <p>
            Our educators are the heart of Wingate. Many members of our team
            have been part of our community for more than a decade, bringing
            with them a wealth of knowledge, experience and strong relationships
            with children and families.
          </p>
          <p>
            We are also excited to welcome new educators who bring fresh ideas,
            passion and enthusiasm, continuing to strengthen our team and our
            community.
          </p>
          <p>
            Our highly qualified team includes five Early Childhood Teachers,
            with 90% of our educators holding Diploma qualifications or higher.
            We are proud of the professional knowledge, dedication and
            commitment our educators bring every day.
          </p>
          <p>
            Our leadership team provides consistent support for children,
            families and educators, including a full-time Centre Director,
            Educational Leader and Service Administrator who work together to
            ensure the service continues to grow while maintaining the strong
            values that have guided Wingate since 1975.
          </p>

          {teamMemberGroups.map((group) => (
            <TeamGroup key={group.title}>
              <h2>{group.title}</h2>
              <TeamGrid>
                {group.members.map((member) => (
                  <TeamCard
                    key={`${group.title}-${member.name}-${member.role}`}
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
                      {member.qualification && (
                        <TeamQualification>
                          {member.qualification}
                        </TeamQualification>
                      )}
                      {member.bio && <p>{member.bio}</p>}
                    </TeamBody>
                  </TeamCard>
                ))}
              </TeamGrid>
            </TeamGroup>
          ))}
        </TextPanel>
      </Section>
    </Main>
  );
}
