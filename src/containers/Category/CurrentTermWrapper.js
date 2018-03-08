// Import Dependencies
import styled from 'styled-components';
import { BRIGHT_SUN } from '../../settings/colors';
import { hexToRgba } from '../../utils/colorUtils';

// Export Styled Component
export default styled.div`
  color: ${ BRIGHT_SUN };
  cursor: pointer;
  font-size: 140px;
  left: 0;
  padding: 40px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-55%);
  z-index: 9;

  &:hover {
    text-shadow: 0 0 25px ${ hexToRgba(BRIGHT_SUN, 0.3) };
  }
}
`;
