import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navItems, sectionLinksByPath } from "../../content/siteContent";
import logo from "../../assets/logo.png";
import logoIcon from "../../assets/logo_icon.png";
import {
  BurgerButton,
  CtaLink,
  HeaderInner,
  HeaderRoot,
  LogoIconImage,
  LogoImage,
  LogoLink,
  MainNavLink,
  MobileSpacer,
  Navigation,
  NavItem,
  NavList,
  Overlay,
  Subnav,
  SubnavContainer,
  SubnavLink,
  SubnavList,
  SubnavWrap,
} from "./Header.styles";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const sectionLinks = sectionLinksByPath[location.pathname] ?? [];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.setAttribute("data-menu-open", menuOpen ? "true" : "false");
    document.body.classList.toggle("header-menu-open", menuOpen);

    return () => {
      document.body.removeAttribute("data-menu-open");
      document.body.classList.remove("header-menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderRoot $scrolled={scrolled} role="banner">
      {menuOpen && <Overlay aria-hidden="true" onClick={closeMenu} />}

      <HeaderInner>
        <BurgerButton
          $open={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </BurgerButton>

        <LogoLink
          to="/"
          onClick={closeMenu}
          aria-label="Wingate Childcare Home"
        >
          <LogoImage src={logo} alt="Wingate Childcare" />
          <LogoIconImage src={logoIcon} alt="" aria-hidden="true" />
        </LogoLink>

        <Navigation $open={menuOpen} aria-label="Main navigation">
          <NavList id="main-navigation">
            {navItems.map(({ label, to }) => (
              <NavItem key={to}>
                <MainNavLink to={to} onClick={closeMenu}>
                  {label}
                </MainNavLink>
              </NavItem>
            ))}
          </NavList>
          <CtaLink to="/enrolments" onClick={closeMenu}>
            Enrol Now
          </CtaLink>
        </Navigation>

        <MobileSpacer aria-hidden="true" />
      </HeaderInner>

      {sectionLinks.length > 0 && (
        <SubnavWrap>
          <SubnavContainer>
            <Subnav aria-label="Section navigation">
              <SubnavList>
                {sectionLinks.map((section) => (
                  <li key={section.id}>
                    <SubnavLink
                      href={`${location.pathname}#${section.id}`}
                      onClick={closeMenu}
                    >
                      {section.label}
                    </SubnavLink>
                  </li>
                ))}
              </SubnavList>
            </Subnav>
          </SubnavContainer>
        </SubnavWrap>
      )}
    </HeaderRoot>
  );
}
