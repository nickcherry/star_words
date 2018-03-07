// Import Dependencies
import { popTermHistory } from '../../selectors/terms';

// Reduce
export default (state) => {
  return popTermHistory(state);
};
