import React from "react";
import NextApp from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#1f75ff",
    highlight: "#cc5804",
    text: "#ffb95e",
    accent: "#5a5099",
    secondary: "#2204cc",
    secondaryDark75: "#0a023bb9",
    white: "#eee",
    black: "#333",
    blackAlpha25: "rgba(51, 51, 51, 0.25)"
  },

  spacing: {
    fullWidth: "100vw",
    fullHeight: "100vh"
  },

  textSize: {
    linkTextSize: "1.2rem",
    smallDeviceTextSize: "1rem"
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
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
