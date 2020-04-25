import React from "react";
import { element } from "prop-types";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";

function Layout(props) {
  const { children } = props;

  return (
    <div className="Layout row">
      <Header />
      <Sidebar />
      <main className="Content column">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: element,
};

export default Layout;
