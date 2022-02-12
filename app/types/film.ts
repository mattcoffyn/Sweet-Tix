export type Film = {
  id: string;
  title: string;
  description: string;
  length: number;
  rating: string;
  release_date: string;
};

export type Screen = {
  id: string;
  seats: number;
  screen_num: number;
};

export type Show = {
  id: string;
  date: string;
  time: string;
  film: Film;
  screen: Screen;
};
