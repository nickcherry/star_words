// Import Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Isvg from 'react-inlinesvg';

import homeIcon from '../../assets/icons/home.svg';

import Wrapper from './Wrapper';

// Define Component
class HomeButton extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Link to="/categories">
          <Isvg src={ homeIcon } />
        </Link>
      </Wrapper>
    );
  }
}

// Export Component
export default HomeButton;
