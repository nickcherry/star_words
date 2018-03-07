/**
 * A custom router reducer to support an Immutable store.
 * See: https://github.com/gajus/redux-immutable#using-with-react-router-redux
 */
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  locationBeforeTransitions: null,
});

// Reduce
export default (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload,
    });
  }
  return state;
};
