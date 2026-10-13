import { navItems } from "../../content/siteContent";
import { PrimaryButtonLink } from "../../styles/pageLayout.styles";
import {
  MainNavLink,
  NavCloseButton,
  Navigation,
  NavItem,
  NavList,
  Overlay,
} from "./HeaderNavigation.styles";

type HeaderNavigationProps = {
  menuOpen: boolean;
  onCloseMenu: () => void;
};

export default function HeaderNavigation({
  menuOpen,
  onCloseMenu,
}: HeaderNavigationProps) {
  return (
    <>
      {menuOpen && (
        <Overlay
          aria-hidden="true"
          data-testid="header-navigation-overlay"
          onClick={onCloseMenu}
        />
      )}

      <Navigation $open={menuOpen} aria-label="Main navigation">
        <NavCloseButton
          type="button"
          aria-label="Close navigation menu"
          onClick={onCloseMenu}
        >
          <span />
          <span />
        </NavCloseButton>

        <NavList id="main-navigation">
          {navItems.map(({ label, to }) => (
            <NavItem key={to}>
              <MainNavLink to={to} onClick={onCloseMenu}>
                {label}
              </MainNavLink>
            </NavItem>
          ))}
        </NavList>
        <PrimaryButtonLink
          to="https://prodadmin.myxplor.com/enrollment/index/dllrYUJ1THpWSGlCT2luRVlIM0NqZz09"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enrol now
        </PrimaryButtonLink>
      </Navigation>
    </>
  );
}
