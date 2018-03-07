// Import Dependencies
import { SET_SOUND_ENABLED } from '../../constants/actions';
import setSoundEnabled from './setSoundEnabled';

// Reduce
export default (state, action) => {
  switch(action.type) {
    case SET_SOUND_ENABLED: return setSoundEnabled(state, action);
    default: return state;
  }
};
