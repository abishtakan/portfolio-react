import React from "react";
import "./App.css";
import { Header, Home } from "./components";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default App;
