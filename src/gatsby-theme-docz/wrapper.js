import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { createGlobalStyle } from 'styled-components';

import { Hues, Saturation, Lightness } from './Colors.ts';

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
    /* --neutral: #1F1F24;
    --main: #5E579C;
    --accent: #87E8CE;
    --white: #DAE7F6;

    --neutral-one: #2A2A3C;
    --neutral-two: #323239;
    --main-one: #3F3780;
    --main-two: #766BBC; */

    --hue-purple: ${Hues.Purple};
    --hue-black: ${Hues.Black};
    --hue-accent: ${Hues.Accent};
    --hue-white: ${Hues.White};

    --sat-purple: ${Saturation.Purple}%;
    --sat-black: ${Saturation.Black}%;
    --sat-accent: ${Saturation.Accent}%;
    --sat-white: ${Saturation.White}%;

    --li-purple: ${Lightness.Purple}%;
    --li-black: ${Lightness.Black}%;
    --li-accent: ${Lightness.Accent}%;
    --li-white: ${Lightness.White}%;

    --purple: hsl(var(--hue-purple), var(--sat-purple), var(--li-purple));
    --black: hsl(var(--hue-black), var(--sat-black), var(--li-black));
    --accent: hsl(var(--hue-accent), var(--sat-accent), var(--li-accent));
    --white: hsl(var(--hue-white), var(--sat-white), var(--li-white));

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
