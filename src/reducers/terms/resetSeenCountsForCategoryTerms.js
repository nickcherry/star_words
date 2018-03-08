// Import Dependencies
import { resetSeenCountsForCategoryTerms } from '../../selectors/terms';

// Reduce
export default (state, { category }) => {
  return resetSeenCountsForCategoryTerms(state, category);
};
