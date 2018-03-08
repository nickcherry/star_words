// Import Dependencies
import styled from 'styled-components';
import { WHITE } from '../../settings/colors';

// Export Styled Component
export default styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-65%);
  user-select: none;
  width: 100%;

  span {
  font-size: 10px;
    line-height: 4em;
    opacity: 0.6;
  }

  a {
    color: ${ WHITE };
    display: block;
    font-size: 18px;
    line-height: 2em;
    opacity: 1;
  }
}
`;
