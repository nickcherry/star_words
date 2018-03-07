// Import Dependencies
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Export Styled Component
export default styled.div`
  animation-duration: 4s;
  animation-ease: ease-out;
  animation-name: ${ fadeIn };
  animation-iteration-count: 1;
  animation-direction: normal;

  bottom: 0;
  left: 0;
  position: absolute;
  transform: translateZ(0);
  top: 0;
  width: 100%;
  z-index: -1;
`;
