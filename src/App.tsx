import React, { Component } from "react";
import Header from "./components/Header.tsx";
import MainSidebar from "./components/MainSidebar.tsx";
import Footer from "./components/Footer.tsx";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainSidebar />
        <Footer />
      </>
    );
  }
}

export default App;
