import { contactPage, siteContact } from "../../content/siteContent";
import {
  Container,
  Eyebrow,
  FieldLabel,
  HeroSection,
  Input,
  Intro,
  Main,
  MessageCard,
  PrimaryLinkButton,
  Section,
  SimpleForm,
  SoftCard,
  SubmitButton,
  Textarea,
  TwoColGrid,
} from "./Contact.styles";

export default function Contact() {
  return (
    <Main>
      <HeroSection aria-label="Contact page header">
        <Container>
          <Eyebrow>Wingate Childcare Co-operative</Eyebrow>
          <h1>{contactPage.title}</h1>
          <Intro>{contactPage.intro}</Intro>
        </Container>
      </HeroSection>

      <Section id="details" data-reveal="true" data-visible="false">
        <Container>
          <TwoColGrid>
            <SoftCard data-reveal="true" data-visible="false">
              <h2>Contact Details</h2>
              <p>{siteContact.address}</p>
              <p>
                <a href={`tel:${siteContact.phone.replace(/\D/g, "")}`}>
                  {siteContact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </p>
              <h3>Opening Hours</h3>
              <ul>
                {siteContact.hours.map((item) => (
                  <li key={item.day}>
                    {item.day}: {item.time}
                  </li>
                ))}
              </ul>
            </SoftCard>
            <SoftCard data-reveal="true" data-visible="false">
              <h2>Visit Us</h2>
              <p>
                Book a tour to see the rooms, meet educators, and ask questions
                about enrolment availability.
              </p>
              <PrimaryLinkButton
                href={siteContact.mapLink}
                target="_blank"
                rel="noreferrer"
              >
                Open Map
              </PrimaryLinkButton>
            </SoftCard>
          </TwoColGrid>
        </Container>
      </Section>

      <Section id="message" $alt data-reveal="true" data-visible="false">
        <Container>
          <MessageCard data-reveal="true" data-visible="false">
            <h2>Message Us</h2>
            <p>
              Send us a short message and we will get back to you about tours,
              availability, and enrolment steps.
            </p>
            <SimpleForm onSubmit={(event) => event.preventDefault()}>
              <FieldLabel>
                Name
                <Input type="text" name="name" autoComplete="name" />
              </FieldLabel>
              <FieldLabel>
                Email
                <Input type="email" name="email" autoComplete="email" />
              </FieldLabel>
              <FieldLabel>
                Message
                <Textarea name="message" rows={5} />
              </FieldLabel>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </SimpleForm>
          </MessageCard>
        </Container>
      </Section>
    </Main>
  );
}
