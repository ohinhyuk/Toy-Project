export const API_KEY = "3c5f22fe2371a82d5d88ae295d442d80";

const BASE_URL = "https://api.themoviedb.org/3/";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IMovies {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
