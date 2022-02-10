import { NavLink } from 'react-router-dom';
import { Outlet } from 'remix';
import styles from '~/styles/admin.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function () {
  const activeClassName = 'active-link';

  return (
    <section className="admin-page">
      <div className="admin-tabs">
        <h2>Admin</h2>
        <nav>
          <NavLink
            to="films"
            className={({ isActive }) => (isActive ? activeClassName : '')}
          >
            Films
          </NavLink>
          <NavLink
            to="screenings"
            className={({ isActive }) => (isActive ? activeClassName : '')}
          >
            Screenings
          </NavLink>
          <NavLink
            to="screens"
            className={({ isActive }) => (isActive ? activeClassName : '')}
          >
            Screens
          </NavLink>
          <NavLink
            to="prices"
            className={({ isActive }) => (isActive ? activeClassName : '')}
          >
            Prices
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </section>
  );
}
