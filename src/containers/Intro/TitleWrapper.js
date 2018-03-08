// Import Dependencies
import styled, { keyframes } from 'styled-components';
import { BRIGHT_SUN } from '../../settings/colors';

// Export Styled Component
export default styled.div`
  backface-visibility: hidden;
  position: relative;
  top: 50%;
  transform: translateY(-65%) translateZ(0);
  user-select: none;
`;
