// Import Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';

// Define Component
class HomeButton extends React.PureComponent {
  render() {
    return <Wrapper><Link to="/">Home</Link></Wrapper>;
  }
}

// Export Component
export default HomeButton;
