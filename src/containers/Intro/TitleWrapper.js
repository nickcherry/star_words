// Import Dependencies
import styled, { keyframes } from 'styled-components';
import { BRIGHT_SUN } from '../../settings/colors';

// Animations
const intro = keyframes`
  0% {
    opacity: 0;
    transform: scale(5)  translateY(-62%) translateZ(0);
  }
  100% {
    transform: scale(1) translateY(-62%) translateZ(0);
  }
`;

// Export Styled Component
export default styled.h1`
  animation: ${ intro } 4s normal forwards ease-out;
  color: ${ BRIGHT_SUN };
  font-family: 'Star Jedi';
  font-size: 90px;
  line-height: .8em;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;
  top: 50%;
  transform: translateY(-62%);
  user-select: none;
  width: 100%;
`;
