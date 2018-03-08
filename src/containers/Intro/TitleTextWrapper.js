// Import Dependencies
import styled, { keyframes } from 'styled-components';
import { BRIGHT_SUN } from '../../settings/colors';

// Constants
const startTransform = 'scale(18)';
const endTransform = 'scale(1)';

// Animations
const intro = keyframes`
  0% {
    opacity: 0;
    transform: ${ startTransform };
  }
  100% {
    opacity: 1;
    transform: ${ endTransform };
  }
`;

// Export Styled Component
export default styled.h1`
  animation-name: ${ intro };
  animation-delay: 1.2s;
  animation-direction: forwards;
  animation-duration: 4.7s;
  animation-ease: ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  color: ${ BRIGHT_SUN };
  font-family: 'Star Jedi';
  font-size: 100px;
  line-height: .8em;
  opacity: 0;
  margin: 0;
  padding: 0;
  text-align: center;
  user-select: none;
`;
