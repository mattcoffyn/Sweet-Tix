import { NavLink } from 'remix';

export default function NavList() {
  const activeClassName = 'active-link';
  return (
    <nav>
      <NavLink
        to="tickets"
        className={({ isActive }) => (isActive ? activeClassName : '')}
      >
        Tickets
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? activeClassName : '')}
      >
        About
      </NavLink>
      <NavLink
        to="admin"
        className={({ isActive }) => (isActive ? activeClassName : '')}
      >
        Admin
      </NavLink>
    </nav>
  );
}
