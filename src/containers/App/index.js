// Import Dependencies
import Wrapper from './Wrapper';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import Categories from '../Categories';
import Category from '../Category';
import HomeButton from '../HomeButton';
import Intro from '../Intro';
import SoundToggle from '../SoundToggle';

// Define Component
class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <SoundToggle />
        <Route path='/categories' component={HomeButton} />
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/categories' component={Categories} />
          <Route path='/categories/:categoryId' component={Category} />
          <Redirect to="/" />
        </Switch>
      </Wrapper>
    );
  }
}

// Export Component
export default withRouter(connect()(App));
