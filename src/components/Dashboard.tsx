import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { CSSTransition } from 'react-transition-group';
import Fade from 'react-bootstrap/Fade';
import './css/Dashboard.css';
import Searchbar from './Searchbar';
import Suggestion from './Suggestion';
import CardDetail from './CardDetail';

import { RootState } from '../store/store';

const Dashboard = () => {
  const suggestionData = useSelector((state: RootState) => state.listData);
  const movieDetailData = useSelector((state: RootState) => state.detailData);
  return (
    <Container className="app-dashboard">
      <Searchbar />
      {suggestionData && (
        <CSSTransition
          in={!!suggestionData}
          timeout={300}
          classNames="suggestions-collapse"
          mountOnEnter
          appear
          exit
        >
          <Suggestion suggestionData={suggestionData} />
        </CSSTransition>
      )}
      {movieDetailData && (
        <CSSTransition
          in={!!movieDetailData}
          timeout={300}
          classNames="suggestions-fade"
          mountOnEnter
          appear
          exit
        >
          <CardDetail movieDetailData={movieDetailData} />
        </CSSTransition>
      )}
    </Container>
  );
};

export default Dashboard;
