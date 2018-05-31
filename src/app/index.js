// @flow
import React from 'react';
import { Switch, Route } from 'react-router';

import Home from 'src/app/pages/home';
import NoMatch from 'src/app/pages/no-match';
import User from 'src/app/pages/user';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/user/:id" component={User} />
    <Route component={NoMatch} />
  </Switch>
);

export default App;
