/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Cards from './components/Cards';
import Card from './components/Card';


window.React = React;

render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Cards} />
        <Route path="/card/:cardId" component={Card} />
      </Route>
    </Router>,
    document.getElementById('content')
);
