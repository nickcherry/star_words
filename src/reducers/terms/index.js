// Import Dependencies
import { POP_TERM_HISTORY, PUSH_ONTO_TERM_HISTORY, INCREMENT_TERM_SEEN_COUNT } from '../../constants/actions';
import incrementTermSeenCount from './incrementTermSeenCount';
import popTermHistory from './popTermHistory';
import pushOntoTermHistory from './pushOntoTermHistory';

// Reduce
export default (state, action) => {
  switch(action.type) {
    case POP_TERM_HISTORY: return popTermHistory(state, action);
    case PUSH_ONTO_TERM_HISTORY: return pushOntoTermHistory(state, action);
    case INCREMENT_TERM_SEEN_COUNT: return incrementTermSeenCount(state, action);
    default: return state;
  }
};
