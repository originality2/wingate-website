import { parentResourceLinks, resourcesPage } from "../../content/siteContent";
import {
  CardGrid,
  Container,
  Main,
  Section,
  SoftCard,
} from "../../styles/pageLayout.styles";
import PageHero from "../../components/PageHero";
import { TextLink } from "./ParentResources.styles";

export default function ParentResources() {
  return (
    <Main>
      <PageHero title={resourcesPage.title} intro={resourcesPage.intro} />

      <Section id="documents" data-reveal="true" data-visible="false">
        <Container>
          <h2>Documents</h2>
          <CardGrid>
            {parentResourceLinks.documents.map((resource) => (
              <SoftCard
                key={resource.label}
                data-reveal="true"
                data-visible="false"
              >
                <h3>{resource.label}</h3>
                <TextLink href={resource.href} target="_blank" rel="noreferrer">
                  Open Resource
                </TextLink>
              </SoftCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section id="daily" data-reveal="true" data-visible="false">
        <Container>
          <CardGrid $twoCol>
            <SoftCard data-reveal="true" data-visible="false">
              <h2>Daily Information</h2>
              <ul>
                <li>Drop-off and collection routines</li>
                <li>Clearly labelled bag and spare clothing each day</li>
                <li>
                  Water bottle, comfort item, and weather-appropriate clothing
                </li>
                <li>Sun-safe hat requirements from September to April</li>
                <li>Communication and updates from educators</li>
              </ul>
            </SoftCard>
            <SoftCard data-reveal="true" data-visible="false">
              <h2>Communication</h2>
              <p>
                Families are supported through enrolment and orientation with
                open communication between management, educators, and families.
                Personal information is handled respectfully and confidentially.
              </p>
            </SoftCard>
          </CardGrid>
        </Container>
      </Section>

      <Section id="policies" data-reveal="true" data-visible="false">
        <Container>
          <h2>Policies</h2>
          <CardGrid>
            {parentResourceLinks.policies.map((policy) => (
              <SoftCard
                key={policy.label}
                data-reveal="true"
                data-visible="false"
              >
                <h3>{policy.label}</h3>
                <TextLink href={policy.href} target="_blank" rel="noreferrer">
                  View Policy
                </TextLink>
              </SoftCard>
            ))}
          </CardGrid>
        </Container>
      </Section>
    </Main>
  );
}
