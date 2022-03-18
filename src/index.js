import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import table from './Table'

ReactDOM.render(
  <Router>
    <Route exact path='/' component={App} />
    <Route exact path='/table' component={table} />
  </Router>,
  document.getElementById('root')
);