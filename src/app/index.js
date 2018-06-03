// @flow
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { Helmet } from 'react-helmet';

import theme from 'src/app/styles/theme';
import globalStyles from 'src/app/styles/global';
import Home from 'src/app/pages/home';
import NoMatch from 'src/app/pages/no-match';
import User from 'src/app/pages/user';

injectGlobal`${globalStyles}`; // eslint-disable-line no-unused-expressions

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet titleTemplate="%s | Seven hand poker" defaultTitle="Seven hand poker" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={User} />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  </ThemeProvider>
);

export default App;
