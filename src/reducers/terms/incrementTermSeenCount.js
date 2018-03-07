// Import Dependencies
import { incrementTermSeenCount } from '../../selectors/terms';

// Reduce
export default (state, { amount, term }) => {
  return incrementTermSeenCount(state, term, amount);
};
