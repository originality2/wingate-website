import {
  enrolmentsPage,
  parentResourceLinks,
  siteContact,
} from "../../content/siteContent";
import {
  Container,
  ContentGrid,
  Eyebrow,
  HeroSection,
  Intro,
  Main,
  CardGrid,
  PrimaryButtonAnchor,
  Section,
  SoftCard,
  TextPanel,
} from "../../styles/pageLayout.styles";

export default function Enrolments() {
  return (
    <Main>
      <HeroSection aria-label="Enrolments page header">
        <Container>
          <Eyebrow>Wingate Childcare Co-operative</Eyebrow>
          <h1>{enrolmentsPage.title}</h1>
          <Intro>{enrolmentsPage.intro}</Intro>
        </Container>
      </HeroSection>

      <Section id="info" data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel>
            <h2>Enrolment Information & Availability</h2>
            <p>
              Families are encouraged to join the waitlist as early as possible.
              Places are offered based on availability across the year, with
              most offers made at the beginning of each year when children
              transition to school.
            </p>
            <p>
              As day changes and withdrawals require only two weeks&apos;
              notice, availability can shift quickly. Offers are also made in
              line with the Priority of Access policy.
            </p>
            <PrimaryButtonAnchor
              href={parentResourceLinks.documents[0].href}
              target="_blank"
              rel="noreferrer"
            >
              Open Family Handbook
            </PrimaryButtonAnchor>
            <PrimaryButtonAnchor
              href="https://prodadmin.myxplor.com/enrollment/index/dllrYUJ1THpWSGlCT2luRVlIM0NqZz09"
              target="_blank"
              rel="noreferrer"
            >
              Add to Waitlist
            </PrimaryButtonAnchor>
          </TextPanel>
          <TextPanel $soft>
            <h3>What to Prepare</h3>
            <ul>
              <li>Child and family contact details</li>
              <li>Preferred days and start timeframe</li>
              <li>CCS information and child CRN</li>
              <li>Immunisation and allergy/dietary information</li>
              <li>Emergency contacts</li>
              <li>Authorised collection identification details</li>
            </ul>
          </TextPanel>
        </ContentGrid>
      </Section>

      <Section id="fees" $alt data-reveal="true" data-visible="false">
        <Container>
          <h2>Fees</h2>
          <CardGrid>
            <SoftCard data-reveal="true" data-visible="false">
              <h3>Daily Fees</h3>
              <p>
                Current fees: Daily $161, Weekly $785. Fees are set by the
                Committee of Management and reviewed annually.
              </p>
            </SoftCard>
            <SoftCard data-reveal="true" data-visible="false">
              <h3>Child Care Subsidy</h3>
              <p>
                Out-of-pocket costs depend on CCS and ACCS eligibility. CCS is
                based on the centre&apos;s 11-hour operating day.
              </p>
            </SoftCard>
            <SoftCard data-reveal="true" data-visible="false">
              <h3>Inclusions</h3>
              <p>
                First one-hour orientation is free; half-day orientations are
                charged at half the daily rate.
              </p>
            </SoftCard>
          </CardGrid>
        </Container>
      </Section>

      <Section id="tours" data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel $soft>
            <h2>Tours</h2>
            <p>
              Please call or email to book a tour. Tours are by appointment and
              include meeting leadership and room educators while observing the
              program indoors and outdoors.
            </p>
            <PrimaryButtonAnchor href={`mailto:${siteContact.email}`}>
              Book a Tour
            </PrimaryButtonAnchor>
          </TextPanel>
          <TextPanel $soft>
            <h3>What You&apos;ll See</h3>
            <ul>
              <li>Each room and outdoor spaces</li>
              <li>Orientation approach and transition support</li>
              <li>How educators communicate with families</li>
              <li>Current enrolment timelines</li>
              <li>What to bring and what the centre provides</li>
            </ul>
          </TextPanel>
        </ContentGrid>
      </Section>
    </Main>
  );
}
