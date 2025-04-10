import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import User from "./components/user/User.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:userId" element={<User />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
