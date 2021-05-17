import * as React from 'react';
import { Helmet } from 'react-helmet-async';

// The doc prop contains some metadata about the page being rendered that you can use.
// eslint-disable-next-line react/prop-types
const Wrapper = ({ children, doc }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RMAKI</title>
      <link rel="icon" type="image/png" href="assets/logo/logo.png" />
    </Helmet>
    {children}
  </>
);
export default Wrapper;
