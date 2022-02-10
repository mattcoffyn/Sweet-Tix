import { LoaderFunction, Outlet, useLoaderData } from 'remix';
import { supabase } from '~/lib/supabase-client';
import type { Film, Show } from '~/types/film';
import styles from '~/styles/tickets.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const loader: LoaderFunction = async () => {
  const today = new Date().toDateString();
  console.log('loader');

  const { data } = await supabase
    .from<Film>('films')
    .select(
      'id, title, description, length, rating, release_date, shows ( screen, time, date ) '
    );

  let films = data?.filter((film) => {
    let todaysShows = film.shows?.filter((show) => {
      if (new Date(show.date).toDateString() === today) {
        return show;
      }
    });

    if (todaysShows.length > 0) {
      return film;
    }
  });
  return films;
};

export default function () {
  const films: Film[] = useLoaderData();

  return (
    <div className="film-selector layout">
      <h2 className="page-heading">Tickets</h2>
      <div className="grid grid--split">
        <aside>
          {films.map((film) => (
            <div key={film.id} className="card">
              <p>{film.title}</p>
              {film.shows.map((show) => (
                <div>
                  <p>Time: {show.time}</p>
                  <p>Screen: {show.screen}</p>
                </div>
              ))}
            </div>
          ))}
        </aside>

        <Outlet />
      </div>
    </div>
  );
}
