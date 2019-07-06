import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '~/config/global-styles';

const DEFAULT_THEME = {
  colors: {
    primary: '#0070f3'
  }
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={DEFAULT_THEME}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
