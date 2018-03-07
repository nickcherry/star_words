// Import Dependencies
import styled from 'styled-components';
import { BRIGHT_SUN } from '../../settings/colors';

// Export Styled Component
export default styled.div`
  color: ${ BRIGHT_SUN };
  cursor: pointer;
  font-size: 140px;
  left: 0;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-60%);
  z-index: 9;
}
`;
