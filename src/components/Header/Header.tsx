import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sectionLinksByPath } from "../../content/siteContent";
import logo from "../../assets/logo.png";
import logoIcon from "../../assets/logo_icon.png";
import {
  BurgerButton,
  HeaderInner,
  HeaderRoot,
  LogoIconImage,
  LogoImage,
  LogoLink,
  MobileSpacer,
  Subnav,
  SubnavContainer,
  SubnavLink,
  SubnavList,
  SubnavWrap,
} from "./Header.styles";
import HeaderNavigation from "../HeaderNavigation";

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
      <HeaderInner>
        <BurgerButton
          $open={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
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

        <HeaderNavigation menuOpen={menuOpen} onCloseMenu={closeMenu} />

        <MobileSpacer aria-hidden="true" />
      </HeaderInner>
    </HeaderRoot>
  );
}
