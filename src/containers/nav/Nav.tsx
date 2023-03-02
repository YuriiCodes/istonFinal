// container Nav component, any data for nav structure should go here
// container gets imported into 'components/layout/Layout'

import { Nav } from 'components/nav/Nav';
import { NavLink } from 'components/nav/NavLink';

export const NavContainer = () => (
  <Nav>
    <NavLink to="/temp/elements">Verðlaunahafar</NavLink>
    <NavLink to="/prismic/articles">Innsendingar</NavLink>
    <NavLink to="/prismic">Um Ístón</NavLink>
  </Nav>
);
