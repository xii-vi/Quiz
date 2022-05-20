import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import { makeServer } from "./server";
const root = createRoot(document.getElementById("root"));
// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
