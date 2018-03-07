// Import Dependencies
import { SET_SOUND_ENABLED } from '../constants/actions';

// Export Actions
export const setSoundEnabled = (enabled) => {
  return { type: SET_SOUND_ENABLED, enabled };
};
