// Import Dependencies
import React from 'react';
import { connect } from 'react-redux';

import { incrementTermSeenCount, popTermHistory, pushOntoTermHistory } from '../../actions/terms';
import { getCategoryById } from '../../selectors/categories';
import { getMaxSeenCount, getMostRecentTerm, getNextTermForCategory } from '../../selectors/terms';
import CategoryNameWrapper from './CategoryNameWrapper';

import CurrentTermWrapper from './CurrentTermWrapper';
import NextButtonWrapper from './NextButtonWrapper';
import PrevButtonWrapper from './PrevButtonWrapper';
import SeenCountWrapper from './SeenCountWrapper';
import Wrapper from './Wrapper';

// Define Component
class Category extends React.PureComponent {
  render() {
    if (this.props.category === undefined) {
      this.props.history.push('/');
      return null;
    } else {
      return (
        <Wrapper>
          { this.getCategoryName() }
          { this.getCurrentTerm() }
          { this.getSeenCount() }
          { this.getPrevButton() }
          { this.getNextButton() }
        </Wrapper>
      );
    }
  }

  getCategoryName() {
    return <CategoryNameWrapper>{ this.props.category.get('name') }</CategoryNameWrapper>;
  }

  getCurrentTerm() {
    return <CurrentTermWrapper onClick={ this.next }>{ this.props.currentTerm.get('name') }</CurrentTermWrapper>;
  }

  getSeenCount() {
    const [count, max] = [this.props.currentTerm.get('seenCount') + 1, this.props.maxSeenCount];
    return <SeenCountWrapper>Seen { count } of { max } Times</SeenCountWrapper>;
  }

  getPrevButton() {
    if (this.props.prevTerm === undefined) return null;
    return <PrevButtonWrapper onClick={ this.prev }>◀ Prev</PrevButtonWrapper>;
  }

  getNextButton() {
    return <NextButtonWrapper onClick={ this.next }>Next ▶</NextButtonWrapper>;
  }

  prev = () => {
    this.props.prev(this.props.prevTerm);
  }

  next = () => {
    this.props.next(this.props.currentTerm);
  }
}

// Map State
const mapStateToProps = (state, ownProps) => {
  const { categoryId } = ownProps.match.params;
  const category = getCategoryById(categoryId)(state);
  const currentTerm = getNextTermForCategory(category)(state);
  const prevTerm = getMostRecentTerm()(state);
  const maxSeenCount = getMaxSeenCount(state);
  return {
    category,
    currentTerm,
    maxSeenCount,
    prevTerm,
  };
};

// Map Dispatch
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    next: (term) => {
      dispatch(incrementTermSeenCount(term, 1));
      dispatch(pushOntoTermHistory(term));
    },
    prev: (prevTerm) => {
      dispatch(incrementTermSeenCount(prevTerm, -1));
      dispatch(popTermHistory());
    },
  };
}

// Export Component
export default connect(mapStateToProps, mapDispatchToProps)(Category);
