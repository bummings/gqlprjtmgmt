import React from "react";
import "./App.css";
import flamingo from "./components/assets/flamingo.jpg";

function App() {
  return (
  <div className="container">
    <img 
      src={flamingo}
      alt="a flamingo appears"
      className="flamingo" 
    />
    <h1 className="bruh">bruh</h1>
  </div>
  );
}

export default App;
