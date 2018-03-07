// Import Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import StartButtonWrapper from './StartButtonWrapper';
import TitleWrapper from './TitleWrapper';
import Wrapper from './Wrapper';

// Define Component
class Intro extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>Star<br />Words</TitleWrapper>
        <StartButtonWrapper>
          <Link to="/categories">Click to Begin</Link>
        </StartButtonWrapper>
      </Wrapper>
    );
  }
}

// Export Component
export default Intro;
