import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.css';

const AccordianPage = React.lazy(() => import('./pages/AccordianPage'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(AccordianPage)} />
        </Switch>
    </Router>
  );
}

export default App;
