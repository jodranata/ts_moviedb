import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Dashboard from './components/Dashboard';

import { RootState } from './store/store';

import './App.css';

const App = () => {
  const backDrop = useSelector(
    (state: RootState) => state.dataState.detailData?.backdrop_path,
  );
  const backDropURL = backDrop
    ? `https://image.tmdb.org/t/p/original${backDrop}`
    : '';
  useEffect(() => {
    if (backDropURL)
      document.body.setAttribute(
        'style',
        `background: #f0f0f0 url(${backDropURL}) no-repeat center;`,
      );
    else document.body.setAttribute('style', 'background: #f0f0f0');
  }, [backDropURL]);

  return (
    <div className="app">
      <Container className="dashboard-card py-5 bg-dark text-light rounded shadow-lg">
        <Dashboard />
      </Container>
    </div>
  );
};

export default App;
