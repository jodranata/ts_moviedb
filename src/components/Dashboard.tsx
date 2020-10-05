import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import Fade from 'react-bootstrap/Fade';
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
        <Collapse in={!!suggestionData}>
          <Suggestion suggestionData={suggestionData} />
        </Collapse>
      )}
      {movieDetailData && (
        <Fade in={!!movieDetailData}>
          <CardDetail />
        </Fade>
      )}
    </Container>
  );
};

export default Dashboard;
