import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { CSSTransition } from 'react-transition-group';

import './css/Dashboard.css';
import Searchbar from './Searchbar';
import Suggestion from './Suggestion';
import CardDetail from './CardDetail';

import { RootState } from '../store/store';
import setAnimationAction from '../store/actions/uiAction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const suggestionData = useSelector(
    (state: RootState) => state.dataState.listData,
  );
  const movieDetailData = useSelector(
    (state: RootState) => state.dataState.detailData,
  );
  const showSuggestionData = useSelector(
    (state: RootState) => state.uiState.collapseAnimation,
  );
  const showMovieDetail = useSelector(
    (state: RootState) => state.uiState.fadeAnimation,
  );
  useEffect(() => {
    if (suggestionData) dispatch(setAnimationAction('collapse', true));
  }, [suggestionData, dispatch]);
  return (
    <Container className="app-dashboard">
      <Searchbar />

      <CSSTransition
        in={showSuggestionData}
        timeout={300}
        classNames="suggestions-collapse"
        mountOnEnter
        appear
        unmountOnExit
      >
        <Suggestion suggestionData={suggestionData} />
      </CSSTransition>

      <CSSTransition
        in={showMovieDetail}
        timeout={300}
        classNames="suggestions-fade"
        mountOnEnter
        appear
        unmountOnExit
      >
        <CardDetail movieDetailData={movieDetailData} />
      </CSSTransition>
    </Container>
  );
};

export default Dashboard;
