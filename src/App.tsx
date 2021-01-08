import React, { Component } from "react";
import Header from "./components/Header.tsx";
import MainSidebar from "./components/MainSidebar.tsx";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainSidebar />
      </>
    );
  }
}

export default App;
