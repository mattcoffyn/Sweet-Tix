import { LoaderFunction, Outlet, useLoaderData } from 'remix';
import { supabase } from '~/lib/supabase-client';
import type { Film, Show } from '~/types/film';

export const loader: LoaderFunction = async () => {
  const { data: films } = await supabase
    .from<Film>('films')
    .select(
      'id, title, description, length, rating, release_date, shows ( screen, time, date ) '
    );
  return films;
};

export default function () {
  const films: Film[] = useLoaderData();

  function getTodaysShowings(film: Film) {
    const showings = film.shows.map((show: Show) => {
      if (show.date == '2022-02-10') {
        return (
          <div>
            <p>Time: {show.time}</p>
            <p>Screen: {show.screen}</p>
          </div>
        );
      }
    });
    return showings;
  }

  return (
    <>
      <h1>Now Playing</h1>
      <div className="grid grid--split">
        <aside>
          {films.map((film) => (
            <div key={film.id} className="card">
              <p>{film.title}</p>
              {film.shows.length > 0 ? getTodaysShowings(film) : null}
            </div>
          ))}
        </aside>

        <Outlet />
      </div>
    </>
  );
}
