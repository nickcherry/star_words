// Import Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCategories } from '../../selectors/categories';
import CategoryWrapper from './CategoryWrapper';
import Wrapper from './Wrapper';

// Define Component
class Categories extends React.PureComponent {
  render() {
    return <Wrapper>{ this.getCategories() }</Wrapper>;
  }

  getCategories() {
    return this.props.categories.map((category) => {
      const id = category.get('id');
      const path = `/categories/${ id }`;
      return (
        <CategoryWrapper key={ id }>
          <Link to={path }>{ category.get('name') }</Link>
        </CategoryWrapper>
      );
    });
  }
}

// Map State
const mapStateToProps = (state) => {
  return {
    categories: getCategories(state),
  };
};


// Export Component
export default connect(mapStateToProps)(Categories);
