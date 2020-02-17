import React from "react";
import "./styles/main.scss";
import Hero from "./components/hero/hero";
import Showcase from "./components/showcase/showcase";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="showcase-section">
        <Showcase />
        <Showcase />
      </div>
    </div>
  );
}

export default App;
