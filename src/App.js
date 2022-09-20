import React from "react";
import Content from "./Function";
import { Arrow } from "./Arrow";
import Navbar from "./Class";

function App() {
  return (
    <div className="App">
      <Arrow />
      <Navbar />
      <Content />
      <h3>Hello World</h3>
    </div>
  );
}

export default App;
