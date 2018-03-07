// Import Dependencies
import { pushOntoTermHistory } from '../../selectors/terms';

// Reduce
export default (state, { term }) => {
  return pushOntoTermHistory(state, term);
};
