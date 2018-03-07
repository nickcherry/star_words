// Import Dependencies
import { POP_TERM_HISTORY, PUSH_ONTO_TERM_HISTORY, INCREMENT_TERM_SEEN_COUNT } from '../constants/actions';

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
