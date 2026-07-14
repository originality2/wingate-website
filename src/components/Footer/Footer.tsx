import { Link } from "react-router-dom";
import { navItems, siteContact } from "../../content/siteContent";
import {
  Address,
  BottomBar,
  BottomInner,
  BottomLink,
  Brand,
  ContactLink,
  FooterInner,
  FooterRoot,
  Heading,
  Hours,
  LogoLetter,
  LogoLink,
  LogoName,
  NavItemLink,
  NavList,
  Tagline,
} from "./Footer.styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterRoot role="contentinfo">
      <FooterInner>
        <Brand>
          <LogoLink as={Link} to="/about" aria-label="Wingate Childcare Home">
            <LogoLetter aria-hidden="true">W</LogoLetter>
            <LogoName>Wingate Childcare Co-operative</LogoName>
          </LogoLink>
          <Tagline>
            A warm early learning environment where children, educators, and
            families grow together.
          </Tagline>
        </Brand>

        <div>
          <Heading>Quick Links</Heading>
          <NavList>
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavItemLink as={Link} to={to}>
                  {label}
                </NavItemLink>
              </li>
            ))}
          </NavList>
        </div>

        <div>
          <Heading>Visit + Contact</Heading>
          <Address>
            <ContactLink
              href={siteContact.mapLink}
              target="_blank"
              rel="noreferrer"
            >
              {siteContact.address}
            </ContactLink>
            <ContactLink href={`tel:${siteContact.phone.replace(/\D/g, "")}`}>
              {siteContact.phone}
            </ContactLink>
            <ContactLink href={`mailto:${siteContact.email}`}>
              {siteContact.email}
            </ContactLink>
          </Address>
          <Hours>
            <strong>Hours:</strong> Monday to Friday, 7:00am – 6:00pm
          </Hours>
        </div>
      </FooterInner>

      <BottomBar>
        <BottomInner>
          <p>© {year} Wingate Childcare Co-operative.</p>
          <p>
            <BottomLink as={Link} to="/parent-resources">
              Parent Resources
            </BottomLink>
            {" · "}
            <BottomLink as={Link} to="/enrolments">
              Enrolments
            </BottomLink>
          </p>
        </BottomInner>
      </BottomBar>
    </FooterRoot>
  );
}
