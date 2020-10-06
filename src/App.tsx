import React from 'react';

import Container from 'react-bootstrap/Container';
import Dashboard from './components/Dashboard';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Container className="dashboard-card py-5 bg-dark text-light rounded shadow-lg">
        <Dashboard />
      </Container>
    </div>
  );
};

export default App;
