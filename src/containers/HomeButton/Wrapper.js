// Import Dependencies
import styled from 'styled-components';
import { WHITE } from '../../settings/colors';

// Export Styled Component
export default styled.div`
  cursor: pointer;
  height: 24px;
  opacity: 0.6;
  position: absolute;
  left: 8px;
  top: 4px;
  width: 24px;
  z-index: 99999;

  svg {
    fill: ${ WHITE };
    stroke: ${ WHITE };
  }

  &:hover {
    opacity: 0.9;
  }
`;
