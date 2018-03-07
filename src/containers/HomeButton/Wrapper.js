// Import Dependencies
import styled from 'styled-components';

// Export Styled Component
export default styled.div`
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 9px;
  position: fixed;
  left: 12px;
  top: 8px;
  user-select: none;
  z-index: 99999;

  a {
    color: rgba(255, 255, 255, 0.7);
  }

  &:hover a {
    color: rgba(255, 255, 255, 1);
  }
`;
