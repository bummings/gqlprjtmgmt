import React from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";

import flamingo from "./components/assets/flamingo.jpg";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="container">
          <Header />
          <div className="flamingoContainer">
            <img src={flamingo} alt="a flamingo appears" className="flamingo" />
            <h1 className="bruh">bruh</h1>
            <Clients />
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
