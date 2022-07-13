import React from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import flamingo from "./components/assets/flamingo.jpg";
import Header from "./components/Header";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
          clients: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
});

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
