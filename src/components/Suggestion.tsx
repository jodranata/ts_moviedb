import React from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'throttle-debounce';
import {
  SearchedMovieResponse,
  SearchedMovieResult,
  noIcons,
} from '../store/types';
import { getMovieDetailAction } from '../store/actions/dataAction';
import setAnimationAction from '../store/actions/uiAction';

import './css/Suggestion.css';

interface SuggestionProps {
  suggestionData: SearchedMovieResponse | null;
}

const Suggestion = ({ suggestionData }: SuggestionProps) => {
  const dispatch = useDispatch();

  const debounceDispatchGetMovie = debounce(500, (movId: number) => {
    dispatch(getMovieDetailAction(movId));
  });
  if (suggestionData) {
    const handleOnClick = (id: number): unknown => {
      dispatch(setAnimationAction('fade', false));
      return debounceDispatchGetMovie(id);
    };

    const { results } = suggestionData;
    const list = results.map((movies: SearchedMovieResult) => {
      const { poster_path, id, title, release_date } = movies;
      const icon = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : noIcons;
      const year = release_date ? release_date.split('-')[0] : '';
      return (
        <div
          key={id}
          onClick={() => handleOnClick(id)}
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') handleOnClick(id);
          }}
          className="suggestion-item"
          role="button"
          tabIndex={0}
        >
          <img src={icon} alt="poster" className="suggestion-poster" />
          <div className="suggestion-summary">
            <div>{`${title} ${`${year ? `(${year})` : ''}`}`}</div>
          </div>
        </div>
      );
    });

    return (
      <div className="suggestion-container">
        {list.length > 0 ? list : <h3>No results</h3>}
      </div>
    );
  }
  return <div />;
};

export default Suggestion;
