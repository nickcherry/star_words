// Dependencies
import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

// Constants
export const SOUND_ENABLED = 'soundEnabled';

// Getters
export const getSoundEnabled = (state) => state.get(SOUND_ENABLED);

// Setters
export const setSoundEnabled = (state, enabled) => state.set(SOUND_ENABLED, enabled);
