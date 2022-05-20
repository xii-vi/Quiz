import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { QuizProvider } from "./context/quiz-context";
const root = createRoot(document.getElementById("root"));
// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QuizProvider>
    <App />
    </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
