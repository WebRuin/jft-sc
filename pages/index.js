import React from "react";

// Components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

class Index extends React.Component {
  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(err => console.error("Service worker registration failed", err));
    } else {
      console.log("Service worker not supported");
    }
  };
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default Index;
