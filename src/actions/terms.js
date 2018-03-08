// Import Dependencies
import {
  INCREMENT_TERM_SEEN_COUNT,
  POP_TERM_HISTORY,
  PUSH_ONTO_TERM_HISTORY,
  RESET_SEEN_COUNTS_FOR_CATEGORY_TERMS,
} from '../constants/actions';

// Export Actions
export const incrementTermSeenCount = (term, amount) => {
  return { type: INCREMENT_TERM_SEEN_COUNT, term, amount };
};

export const popTermHistory = () => {
  return { type: POP_TERM_HISTORY };
}

export const pushOntoTermHistory = (term) => {
  return { type: PUSH_ONTO_TERM_HISTORY, term };
}

export const resetSeenCountsForCategoryTerms = (category) => {
  return { type: RESET_SEEN_COUNTS_FOR_CATEGORY_TERMS, category };
}
