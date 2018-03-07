// Import Dependencies
import styled from 'styled-components';

// Export Styled Component
export default styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 9px;
  position: absolute;
  right: 12px;
  top: 8px;;
  user-select: none;
  z-index: 99999;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
