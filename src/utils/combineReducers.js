// Third-Party Dependencies
import { fromJS } from 'immutable';

// Rather than using redux's out-of-the-box combineReducers,
// which only provides each reducer with a slice of the state,
// our combination function will give each reducer access to the entire state.
const defaultState = fromJS({});
export default function combineReducers (reducers = {}, initialState = defaultState) {
  const reducerKeys = Object.keys(reducers);
  return function combination(state = initialState, action) {
    let i, key, nextState = state, hasChanged = false;
    for (i = 0; i < reducerKeys.length; i++) {
      key = reducerKeys[i];
      nextState = reducers[key](nextState, action);
      hasChanged = hasChanged || nextState !== state;
    }
    return hasChanged ? nextState : state;
  };
}
