// Import Dependencies
import styled, { keyframes } from 'styled-components';
import { WHITE } from '../../settings/colors';

// Animations
const move = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-500px);
  }
`;

// Export Styled Component
export default styled.div`
  animation-direction: forwards;
  animation-name: ${ move };
  animation-iteration-count: infinite;

  border-radius: 50%;
  background: ${ WHITE };
  position: absolute;
`;
