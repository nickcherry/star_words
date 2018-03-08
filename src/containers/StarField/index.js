// Import Dependencies
import React from 'react';

import { randWithinRange } from '../../utils/numUtils';

import StarWrapper from './StarWrapper';
import Wrapper from './Wrapper';

// Define Component
class StarField extends React.PureComponent {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Wrapper>{ this.getStars() }</Wrapper>;
  }

  getStars() {
    const stars = [];
    for (let i = 0; i < 1000; i++) {
      const diameter = `${ randWithinRange(1, 4) }px`;
      const style = {
        left: `${ randWithinRange(-10, 110) }%`,
        top: `${ randWithinRange(-100, 300) }%`,
        width: diameter,
        height: diameter,
        animationDelay: `${ randWithinRange(0, 5) }s`,
        animationDuration: `${ randWithinRange(65, 74) }s`
      };
      stars.push(
        <StarWrapper key={ i } style={ style } />
      );
    }
    return stars;
  }
}

// Export Component
export default StarField;
