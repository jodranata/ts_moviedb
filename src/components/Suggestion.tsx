import React from 'react';
import { useDispatch } from 'react-redux';

import { SearchedMovieResponse, SearchedMovieResult } from '../store/types';
import { getMovieDetailAction } from '../store/actions/dataAction';

import './css/Suggestion.css';

interface SuggestionProps {
  suggestionData: SearchedMovieResponse;
}

const noIcons = `http://placehold.jp/300/919191/ffffff/500x750.png?text=%3F&css=%7B%22border%22%3A%22%2014px%20solid%20rgba(0%2C0%2C0%2C0.2)%22%7D`;

const Suggestion = ({ suggestionData }: SuggestionProps) => {
  const dispatch = useDispatch();
  const handleGetMovieDetail = (id: number): unknown =>
    dispatch(getMovieDetailAction(id));
  const { results } = suggestionData;
  const list = results.map((movies: SearchedMovieResult) => {
    const { poster_path, id, title, release_date } = movies;
    const icon = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : noIcons;
    const year = release_date.split('-')[0];
    return (
      <div
        key={id}
        onClick={() => handleGetMovieDetail(id)}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'Enter') handleGetMovieDetail(id);
        }}
        className="suggestion-item"
        role="button"
        tabIndex={0}
      >
        <img src={icon} alt="poster" className="suggestion-poster" />
        <div className="suggestion-summary">
          <div>{`${title} (${year})`}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="suggestion-container">
      {list.length > 0 ? list : <h3>No results</h3>}
    </div>
  );
};

export default Suggestion;
