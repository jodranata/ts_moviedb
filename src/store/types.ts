export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const CLEAR_SEARCH_MOVIE = 'CLEAR_SEARCH_MOVIE';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const noIcons = `http://placehold.jp/300/919191/ffffff/500x750.png?text=%3F&css=%7B%22border%22%3A%22%2014px%20solid%20rgba(0%2C0%2C0%2C0.2)%22%7D`;

export interface SearchedMovieResult {
  popularity: number;
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[] | null;
  backdrop_path: string | null;
  adult: false;
  overview: string;
  poster_path: string | null;
}

export interface SearchedMovieResponse {
  page: number;
  results: SearchedMovieResult[];
  total_results: number;
  total_pages: number;
}

export interface ProductionCompanies {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}
interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}
interface SpokenLanguages {
  iso_639_1: string;
  name: string;
}

export interface GetMovieDetailResponse extends SearchedMovieResult {
  belongs_to_collection: null | unknown;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string | null;
}

export interface FetchError {
  status_message: string;
  status_code: string;
}

export interface SearchMovieActionType {
  type: typeof SEARCH_MOVIE;
  payload: SearchedMovieResponse;
}

export interface ClearSearchMovieActionType {
  type: typeof CLEAR_SEARCH_MOVIE;
  payload: null;
}

export interface GetMovieDetailActionType {
  type: typeof GET_MOVIE_DETAIL;
  payload: GetMovieDetailResponse;
}
export interface SetErrorActionType {
  type: typeof SET_ERROR;
  payload: FetchError | null;
}

export type DataActionType =
  | SearchMovieActionType
  | GetMovieDetailActionType
  | SetErrorActionType
  | ClearSearchMovieActionType;

export interface DataState {
  listData: SearchedMovieResponse | null;
  detailData: GetMovieDetailResponse | null;
  error: FetchError | null;
}
