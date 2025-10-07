import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@/styles/globals.css"; // your global.css (renamed or imported)

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);