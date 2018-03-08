// Import Dependencies
import styled from 'styled-components';
import { WHITE } from '../../settings/colors';

// Export Styled Component
export default styled.div`
  bottom: 10%;
  color: ${ WHITE };
  cursor: pointer;
  font-size: 14px;
  height: 35px;
  opacity: 0.4;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
  width: 35px;
  z-index: 999999;

  svg {
    fill: ${ WHITE };
    stroke: ${ WHITE };
  }

  &:hover {
    opacity: 1;
  }
`;
