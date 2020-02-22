import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.css';

const AccordionPage = React.lazy(() => import('./pages/AccordionPage'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(AccordionPage)} />
        </Switch>
    </Router>
  );
}

export default App;
