import axios, { AxiosResponse, AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import {
  GET_MOVIE_DETAIL,
  SEARCH_MOVIE,
  CLEAR_SEARCH_MOVIE,
  SET_ERROR,
  FADE_ANIMATION,
  DataActionType,
  SearchedMovieResponse,
  GetMovieDetailResponse,
  FetchError,
} from '../types';
import { RootState } from '../store';

const tokenize = (string: string): string => {
  return string.trim().toLowerCase().replace(/\s/gi, '%20');
};

export const searchMovieAction = (
  query: string,
): ThunkAction<void, RootState, unknown, DataActionType> => (
  dispatch: Dispatch<DataActionType>,
): unknown => {
  if (query === '')
    return dispatch({ type: CLEAR_SEARCH_MOVIE, payload: null });

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
    process.env.MOVIEDB_API_KEY
  }&query=${tokenize(query)}`;
  axios
    .get(searchUrl)
    .then((res: AxiosResponse<SearchedMovieResponse>) => {
      dispatch({ type: SEARCH_MOVIE, payload: res.data });
    })
    .catch((err: AxiosError<FetchError>) => {
      if (err.response) {
        return dispatch({ type: SET_ERROR, payload: err.response.data });
      }
    });
};

export const getMovieDetailAction = (
  id: number,
): ThunkAction<void, RootState, unknown, DataActionType> => (
  dispatch: Dispatch<DataActionType>,
): void => {
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIEDB_API_KEY}`;
  axios
    .get(detailUrl)
    .then((res: AxiosResponse<GetMovieDetailResponse>) => {
      dispatch({ type: GET_MOVIE_DETAIL, payload: res.data });
      dispatch({ type: FADE_ANIMATION, payload: true });
    })
    .catch((err: AxiosError<FetchError>) => {
      if (err.response) {
        dispatch({ type: SET_ERROR, payload: err.response.data });
      }
    });
};
