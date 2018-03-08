// Import Dependencies
import {
  INCREMENT_TERM_SEEN_COUNT,
  POP_TERM_HISTORY,
  PUSH_ONTO_TERM_HISTORY,
  RESET_SEEN_COUNTS_FOR_CATEGORY_TERMS,
} from '../../constants/actions';
import incrementTermSeenCount from './incrementTermSeenCount';
import popTermHistory from './popTermHistory';
import pushOntoTermHistory from './pushOntoTermHistory';
import resetSeenCountsForCategoryTerms from './resetSeenCountsForCategoryTerms';
// Reduce
export default (state, action) => {
  switch(action.type) {
    case INCREMENT_TERM_SEEN_COUNT: return incrementTermSeenCount(state, action);
    case POP_TERM_HISTORY: return popTermHistory(state, action);
    case PUSH_ONTO_TERM_HISTORY: return pushOntoTermHistory(state, action);
    case RESET_SEEN_COUNTS_FOR_CATEGORY_TERMS: return resetSeenCountsForCategoryTerms(state, action);
    default: return state;
  }
};
