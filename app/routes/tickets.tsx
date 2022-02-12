import { Link, LoaderFunction, Outlet, useLoaderData } from 'remix';
import { supabase } from '~/lib/supabase-client';
import type { Film, Show } from '~/types/film';
import styles from '~/styles/tickets.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const loader: LoaderFunction = async () => {
  const today = new Date().toDateString();

  const { data } = await supabase
    .from<Show>('shows')
    .select(
      'id, time, date, film ( id, title, rating ), screen (id, screen_num) '
    )
    .order('time', { ascending: true });

  let screen1: Show[] = [];
  let screen2: Show[] = [];
  let screen3: Show[] = [];

  data?.filter((show) => {
    // if (new Date(show.date).toDateString() === today) {
    if (show.screen.screen_num === 1) {
      screen1.push(show);
    }
    if (show.screen.screen_num === 2) {
      screen2.push(show);
    }
    if (show.screen.screen_num === 3) {
      screen3.push(show);
    }
    // }
  });

  const shows = { screen1, screen2, screen3 };
  return shows;
};
export default function () {
  const { screen1, screen2, screen3 } = useLoaderData();

  return (
    <div className="layout">
      <div>
        <aside>
          <div>
            <h3>Screen 1</h3>
            <ul>
              {screen1.map((show: Show) => (
                <li>
                  <Link to={show.id}>
                    {show.time} - {show.film.title} -{' '}
                    {show.film.rating.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <h3>Screen 2</h3>
            <ul>
              {screen2.map((show: Show) => (
                <li>
                  <Link to={show.id}>
                    {show.time} - {show.film.title} -{' '}
                    {show.film.rating.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <h3>Screen 3</h3>
            <ul>
              {screen3.map((show: Show) => (
                <li>
                  <Link to={show.id}>
                    {show.time} - {show.film.title} -{' '}
                    {show.film.rating.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <section className="ticket-outlet">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
