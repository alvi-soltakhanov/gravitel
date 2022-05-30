import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://gravitel-graphql-backend.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("token"),
    "client-name": "WidgetX Ecom [web]",
    "client-version": "1.0.0",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
