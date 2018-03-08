// Dependencies
import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

// Constants
export const MAX_SEEN_COUNT = 'maxSeenCount';
export const PRIORITY = 'priority';
export const SEEN_COUNT = 'seenCount';
export const TERM_HISTORY = 'termHistory';
export const TERMS = 'terms';

// Getters
export const getTerms = (state) => state.get(TERMS) || fromJS([]);

export const getMaxSeenCount = (state) => state.get(MAX_SEEN_COUNT);

export const getTermIndex = (term) => {
  return createSelector(
    getTerms,
    (terms) => terms.findIndex((t) => t.get('name') === term.get('name')),
  );
}

export const getActiveTermsByCategory = (category, maxSeenCount) => {
  return createSelector(
    getTerms,
    (terms) => {
      const categoryId = category.get('id');
      return terms.filter((term) => {
        return term.get(SEEN_COUNT) < maxSeenCount &&
          term.get('categories').find((category) => category === categoryId);
      });
    },
  );
};

export const getSortedActiveTermsByCategory = (category, maxSeenCount) => {
  return createSelector(
    getActiveTermsByCategory(category, maxSeenCount),
    (terms) => {
      return terms.sort((a, b) => {
        return a.get(PRIORITY) - b.get(PRIORITY) || a.get(SEEN_COUNT) - b.get(SEEN_COUNT);
      });
    },
  );
};

export const getNextActiveTermForCategory = (category, maxSeenCount) => {
  return createSelector(
    getSortedActiveTermsByCategory(category, maxSeenCount),
    (sortedTerms) => sortedTerms.get(0),
  );
};

export const getTermHistory = (state) => state.get(TERM_HISTORY) || fromJS([]);

export const getMostRecentTerm = (state) => {
  return createSelector(
    getTermHistory,
    (terms) => terms.get(-1),
  );
}

// Setters
export const incrementTermSeenCount = (state, term, amount) => {
  const index = getTermIndex(term)(state);
  const newCount = getTerms(state).get(index).get(SEEN_COUNT) + amount;
  return state.setIn([TERMS, index, SEEN_COUNT], newCount);
};

export const pushOntoTermHistory = (state, term) => {
  return state.update(TERM_HISTORY, (terms) => (terms || fromJS([])).push(term));
}

export const popTermHistory = (state) => {
  return state.update(TERM_HISTORY, (terms) => (terms || fromJS([])).pop());
}

export const resetSeenCountsForCategoryTerms = (state, category) => {
  return state.set(TERMS, state.get(TERMS).map((term) => {
    return term.set(SEEN_COUNT, 0);
  }));
}
