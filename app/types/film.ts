export type Film = {
  id: string;
  title: string;
  description: string;
  length: number;
  rating: string;
  release_date: string;
  shows: { screen: number; date: string; time: string }[];
};

export type Show = {
  screen: number;
  date: string;
  time: string;
};
