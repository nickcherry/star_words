// Import Dependencies
import { setSoundEnabled } from '../../selectors/sound';

// Reduce
export default (state, { enabled }) => {
  return setSoundEnabled(state, enabled);
};
