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
  animation-delay: 5.7s;
  bottom: 15%;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  left: 50%;
  opacity: 0;
  padding: 20px;
  position: absolute;
  transform: translateX(-50%);

  a {
    color: rgba(255, 255, 255, 0.85);
    padding: 10px;
    text-decoration: none;
  }

  &:hover a {
    color: rgba(255, 255, 255, 1);
  }
`;
