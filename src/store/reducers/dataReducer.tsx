import {
  SEARCH_MOVIE,
  GET_MOVIE_DETAIL,
  SET_ERROR,
  CLEAR_SEARCH_MOVIE,
  DataActionType,
  DataState,
  SearchMovieActionType,
  GetMovieDetailActionType,
  SetErrorActionType,
  ClearSearchMovieActionType,
} from '../types';

const INIT_STATE: DataState = {
  error: null,
  listData: null,
  detailData: null,
};

const handleSearchMovie = (
  state: DataState,
  action: SearchMovieActionType | ClearSearchMovieActionType,
): DataState => ({
  ...state,
  error: null,
  listData: action.payload,
});

const handleGetMovieDetail = (
  state: DataState,
  action: GetMovieDetailActionType,
): DataState => ({
  listData: null,
  detailData: action.payload,
  error: null,
});

const handleSetError = (
  state: DataState,
  action: SetErrorActionType,
): DataState => ({
  ...state,
  error: action.payload,
});

const dataReducer = (
  state: DataState = INIT_STATE,
  action: DataActionType,
): DataState => {
  switch (action.type) {
    case SEARCH_MOVIE:
    case CLEAR_SEARCH_MOVIE:
      return handleSearchMovie(state, action);
    case GET_MOVIE_DETAIL:
      return handleGetMovieDetail(state, action);
    case SET_ERROR:
      return handleSetError(state, action);
    default:
      return state;
  }
};

export default dataReducer;
