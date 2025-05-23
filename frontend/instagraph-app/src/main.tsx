import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RegisterComponentFunc } from "./components/registerComponent.tsx";
import { SigninComponentFunc } from "./components/signinComponent.tsx";
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
          <Route path="/register" element={<RegisterComponentFunc />} />
          <Route path="/signin" element={<SigninComponentFunc />} />
          <Route path="/user/:userId/:username" element={<User />} />
          {/* <Route path="/:characterId" element={<CharacterDetails />} /> */}
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
