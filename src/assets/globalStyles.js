// Import Dependencies
import { injectGlobal } from 'styled-components';
import starJedi from './fonts/starjedi-webfont.woff2';
import starJediHollow from './fonts/starjhol-webfont.woff2';
import { BLACK, BRIGHT_SUN, WHITE } from '../settings/colors';

// Define global styles for the app.
// The styles defined here should be used very sparingly;
// basically just font-face definitions and maybe some html/body styling.
// https://www.styled-components.com/docs/api#injectglobal
injectGlobal`
  html, body {
    background: ${ BLACK };
    color: ${ WHITE };
    font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
    font-size: 18px;
    font-weight: normal;
    height: 100%;
    letter-spacing: 0.0075em;
    margin: 0;
    padding: 0;
  }

  body > .container, #app {
    height: 100%;
  }

  a {
    color: ${ WHITE };
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: ${ BRIGHT_SUN };
    }
  }

  /* Star Jedi */
  @font-face {
    font-family: 'Star Jedi';
    font-style: normal;
    font-weight: normal;
    src: url(${ starJedi }) format('woff2');
  }

  /* Star Jedi Hollow */
  @font-face {
    font-family: 'Star Jedi Hollow';
    font-style: normal;
    font-weight: normal;
    src: url(${ starJediHollow }) format('woff2');
  }
`;
