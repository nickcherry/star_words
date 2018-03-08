// Import Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import StartButtonWrapper from './StartButtonWrapper';
import TitleTextWrapper from './TitleTextWrapper';
import TitleWrapper from './TitleWrapper';
import Wrapper from './Wrapper';

// Define Component
class Intro extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <TitleTextWrapper>Star<br />Words</TitleTextWrapper>
        </TitleWrapper>
        <StartButtonWrapper>
          <Link to="/categories">CLICK TO BEGIN</Link>
        </StartButtonWrapper>
      </Wrapper>
    );
  }
}

// Export Component
export default Intro;
