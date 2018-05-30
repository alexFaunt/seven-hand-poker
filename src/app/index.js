import React from 'react';
import { Switch, Route } from 'react-router';

import Home from 'src/app/pages/home';
import NoMatch from 'src/app/pages/no-match';

// TODO stricter react linter for spacing and strings etc
const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route component={NoMatch} />
  </Switch>
);

export default App;
