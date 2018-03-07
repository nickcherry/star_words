// Import Dependencies
import styled, { keyframes } from 'styled-components';

// Animations
const intro = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Export Styled Component
export default styled.div`
  animation: ${ intro } 2s normal forwards ease-out;
  animation-delay: 5s;
  bottom: 15%;
  display: inline-block;
  font-size: 16px;
  left: 50%;
  opacity: 0;
  position: fixed;
  transform: translateX(-50%);

  a {
    color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    text-decoration: none;
  }

  &:hover a {
    color: rgba(255, 255, 255, 1);
  }
`;
