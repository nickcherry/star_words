// Import Dependencies
import Wrapper from './Wrapper';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import AssetPreloader from '../AssetPreloader';
import Categories from '../Categories';
import Category from '../Category';
import HomeButton from '../HomeButton';
import Intro from '../Intro';
import MainContentWrapper from './MainContentWrapper';
import SoundToggle from '../SoundToggle';
import StarField from '../StarField';

// Define Component
class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Route path="/" component={SoundToggle} />
        <Route path='/categories/*' component={HomeButton} />
        <MainContentWrapper>
          <Switch>
            <Route exact path='/' component={Intro} />
            <Route exact path='/categories' component={Categories} />
            <Route path='/categories/:categoryId' component={Category} />
            <Redirect to="/" />
          </Switch>
        </MainContentWrapper>
        <Route path="/" component={StarField} />
        <AssetPreloader />
      </Wrapper>
    );
  }
}

// Export Component
export default withRouter(App);
