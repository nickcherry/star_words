// Import Dependencies
import React from 'react';
import { connect } from 'react-redux';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';

import nextIcon from '../../assets/icons/next.svg';
import prevIcon from '../../assets/icons/prev.svg';

import { incrementTermSeenCount, popTermHistory, pushOntoTermHistory, resetSeenCountsForCategoryTerms } from '../../actions/terms';
import { getCategoryById } from '../../selectors/categories';
import { getMaxSeenCount, getMostRecentTerm, getNextActiveTermForCategory } from '../../selectors/terms';
import CategoryNameWrapper from './CategoryNameWrapper';

import CurrentTermWrapper from './CurrentTermWrapper';
import NextButtonWrapper from './NextButtonWrapper';
import NoActiveTermsWrapper from './NoActiveTermsWrapper';
import PrevButtonWrapper from './PrevButtonWrapper';
import SeenCountWrapper from './SeenCountWrapper';
import Wrapper from './Wrapper';

// Define Component
class Category extends React.PureComponent {
  render() {
    if (this.props.category === undefined) {
      this.props.history.push('/');
      return null;
    } else if (this.props.currentTerm === undefined) {
      return this.getNoActiveTermsContent();
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
    return <SeenCountWrapper>SEEN { count } OF { max } TIMES</SeenCountWrapper>;
  }

  getPrevButton() {
    if (this.props.prevTerm === undefined) return null;
    return (
      <PrevButtonWrapper onClick={ this.prev }>
        <Isvg src={ prevIcon } />
      </PrevButtonWrapper>
    );
  }

  getNextButton() {
    return (
      <NextButtonWrapper onClick={ this.next }>
        <Isvg src={ nextIcon } />
      </NextButtonWrapper>
    );
  }

  getNoActiveTermsContent() {
    return (
      <NoActiveTermsWrapper>
        <span>MASTERED THIS CATEGORY, YOU HAVE...</span>
        <Link to="/categories">CHOOSE A NEW CATEGORY</Link>
        <span>OR</span>
        <a onClick={ this.resetSeenCounts }>RESTART THIS CATEGORY</a>
      </NoActiveTermsWrapper>
    );
  }

  prev = () => {
    this.props.prev(this.props.prevTerm);
  }

  next = () => {
    this.props.next(this.props.currentTerm);
  }

  resetSeenCounts = () => {
    this.props.resetSeenCounts(this.props.category);
  }
}

// Map State
const mapStateToProps = (state, ownProps) => {
  const { categoryId } = ownProps.match.params;
  const category = getCategoryById(categoryId)(state);
  const maxSeenCount = getMaxSeenCount(state);
  const currentTerm = getNextActiveTermForCategory(category, maxSeenCount)(state);
  const prevTerm = getMostRecentTerm()(state);
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
    resetSeenCounts: (category) => {
      dispatch(resetSeenCountsForCategoryTerms(category));
    }
  };
}

// Export Component
export default connect(mapStateToProps, mapDispatchToProps)(Category);
