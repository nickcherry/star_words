// Import Dependencies
import styled from 'styled-components';
import { WHITE } from '../../settings/colors';

// Export Styled Component
export default styled.div`
  cursor: pointer;
  height: 22px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 22px;
  z-index: 999999;

  svg {
    fill: ${ WHITE };
    stroke: ${ WHITE };
    opacity: 0.6;
  }

  &:hover svg {
    opacity: 0.9;
  }
`;
