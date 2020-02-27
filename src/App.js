import React from "react";
import "./styles/main.scss";
import Hero from "./components/hero/hero";
import Showcase from "./components/showcase/showcase";
import showcaseInfo from "./data/showcase.json";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="showcase-section">
        {showcaseInfo.map(showcase => (
          <Showcase
            img={showcase.img}
            title={showcase.title}
            description={showcase.description}
            links={showcase.links}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
