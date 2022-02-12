import { useCatch, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { supabase } from '~/lib/supabase-client';
import type { Film, Show } from '~/types/film';

export type FilmId = string;

export const loader: LoaderFunction = async ({ params }) => {
  const showId: FilmId = params.ticket || '';
  const { data: show } = await supabase
    .from<Show>('shows')
    .select(
      `id, time, date, screen ( id, screen_num, seats ), film (title, description, length, rating, release_date) `
    )
    .eq('id', showId)
    .single();

  console.log(show);
  return show;
};

export default function () {
  const show: Show = useLoaderData();

  return (
    <>
      <p>ID: {show.id}</p>
      <p>Time: {show.time}</p>
      <p>Date: {show.date}</p>
      <p>Screen: {show.screen.screen_num}</p>
      <p>Seats: {show.screen.seats}</p>
      <p>Film title: {show.film.title}</p>
      <p>Film description: {show.film.description}</p>
      <p>Film length: {show.film.length} minutes</p>
      <p>Film rating: {show.film.rating.toUpperCase()}</p>
      <p>Film release date: {show.film.release_date}</p>
    </>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  let message;
  switch (caught.status) {
    case 404:
      message = <p>Oh no!!! Looks like that film doesn't exist</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <section>
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
    </section>
  );
}
