// @flow
import styledNormalize from 'styled-normalize';

import theme from 'src/app/styles/theme';

export default `
  ${styledNormalize}

  body {
    font-family: ${theme.font.family.body};
    font-size: ${theme.font.size.body};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, p, span, input, button, input, optgroup, select, textarea {
    font-size: 100%;
  }
`;
