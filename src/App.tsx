import React from 'react';
import Card from 'react-bootstrap/Card';
import Dashboard from './components/Dashboard';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Card bg="light" className="dashboard-card py-5">
        <Dashboard />
      </Card>
    </div>
  );
};

export default App;
