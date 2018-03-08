// Import Dependencies
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
`;

// Export Styled Component
export default styled.div`
  animation-delay: 0s;
  animation-direction: normal;
  animation-duration: 6s;
  animation-ease: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${ fadeIn };
  animation-iteration-count: 1;

  backface-visibility: hidden;
  bottom: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  transform: translateZ(0);
  top: 0;
  width: 100%;
  z-index: 0;
`;
