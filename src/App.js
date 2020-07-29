import React from 'react';
import GlobalStyle from './styles/global';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
