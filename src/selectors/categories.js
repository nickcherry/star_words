// Dependencies
import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

// Constnats
export const CATEGORIES = 'cateogires';

// Getters
export const getCategories = (state) => state.get(CATEGORIES) || fromJS([]);

export const getCategoryById = (id) => {
  return createSelector(
    getCategories,
    (categories) => categories.find((category) => category.get('id') === id)
  );
};
