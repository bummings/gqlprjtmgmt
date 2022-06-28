import React from "react";
import "./App.css";
import flamingo from "./components/assets/flamingo.jpg";
import Header from "./components/Header";

function App() {
  return (
  <div className="container">

    <Header />
  <div className="flamingoContainer">
    <img 
      src={flamingo}
      alt="a flamingo appears"
      className="flamingo" 
    />
    <h1 className="bruh">bruh</h1>
  </div>
  </div>
  );
}

export default App;
