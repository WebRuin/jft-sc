import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#1f75ff",
    highlight: "#cc5804",
    text: "#ffb95e",
    text25: "#ffb95e52",
    text10: "#ffb95e1c",
    accent: "#5a5099",
    secondary: "#2204cc",
    secondaryDark: "#0a023b",
    secondaryDark25: "rgba(0,0,0,0.25)",
    secondaryDark45: "rgba(0,0,0,0.45)",
    secondaryDark75: "rgba(0,0,0,0.75)",
    darkText: "#2a2343",
    white: "#eee",
    black: "#333",
    blackAlpha25: "rgba(51, 51, 51, 0.25)"
  },

  spacing: {
    fullWidth: "100vw",
    fullHeight: "100vh",
    pageHeaderHeight: "70vh"
  },

  textSize: {
    h2: "3rem",
    h3: "2rem",
    linkTextSize: "1.75rem",
    smallDeviceTextSize: "1.55rem"
  }
};

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  //
  // Scrollbar
  //

  body::-webkit-scrollbar {
    width: 2rem;
  }
  body::-webkit-scrollbar-track {
    background: #cc5804;
  }
  body::-webkit-scrollbar-thumb {
    outline: 1px solid #cc5804;
    background: #0a023b;
    border: 2px solid #cc5804;
  }

  .loaded-logo {
    margin-top: 0 !important;
    opacity: 1 !important;
  }

  .loaded-menu,
  .loaded-social {
    opacity: 1 !important;
    margin-top: 0px !important;
  }
`;

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Just for Tomorrow</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
