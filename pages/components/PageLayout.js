import React from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default PageLayout;
