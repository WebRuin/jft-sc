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

  .loaded-logo {
    margin-top: 0 !important;
    opacity: 1 !important;
  }

  .loaded-menu,
  .loaded-social {
    opacity: 1 !important;
    margin-top: 0px !important;
  }

  .nav-fadeIn {
    top: 0;
    height: 80px !important;
    background: ${({ theme }) => theme.colors.secondaryDark75};
    border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
  }

  .logo-fadeIn {
    width: 402px !important;
    margin-top: 0 !important;
    font-size: 1.25rem !important;
    margin-left: -201px !important;
  }

  .logo-span-fadeIn {
    margin-left: 0.3rem !important;
    font-size: 1.75rem !important;
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    .nav-fadeIn {
      top: 0;
      height: 25px !important;
    }

    .logo-span-fadeIn {
      margin-left: 0.3rem !important;
      font-size: 1.2rem !important;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    .nav-fadeIn {
      top: 0;
      height: 25px !important;
    }
  
    .logo-span-fadeIn {
      margin-left: 0.3rem !important;
      font-size: 1.2rem !important;
    }
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
