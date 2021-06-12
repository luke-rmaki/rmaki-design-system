import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { createGlobalStyle } from 'styled-components';

import { Hues, Saturation, Lightness } from './Colors.ts';
import { generateVariantCSS } from './generateVariantCSS.ts';

// The doc prop contains some metadata about the page being rendered that you can use.
// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RMAKI</title>
      <link rel="icon" type="image/png" href="public/assets/logo/logo.png" />
    </Helmet>
    <GlobalStyles />
    {children}
  </>
);
export default Wrapper;

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

  html {
    
    /* Main colors */
    --purple: hsl(${Hues.Purple}, ${Saturation.Purple}%, ${Lightness.Purple}%);
    --black: hsl(${Hues.Black}, ${Saturation.Black}%, ${Lightness.Black}%);
    --white: hsl(${Hues.White}, ${Saturation.White}%, ${Lightness.White}%);
    --accent: hsl(${Hues.Accent}, ${Saturation.Accent}%, ${Lightness.Accent}%);

    ${generateVariantCSS()}

    --font: 'Fira Code', monospace;

    --breakpoint: 600px;

    --h-one: 32px;
    --h-two: 28px;
    --h-three: 24px;
    --p: 18px;

    @media (min-width: var(----breakpoint)) {
    --h-one: 48px;
    --h-two: 42px;
    --h-three: 36px;
    --p: 16px;
    }
  }

  p, span {
    font-size: var(--p);
    color: var(--white);
    font-family: var(--font) !important;
  }



`;
