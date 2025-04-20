import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App className="p-10 pb-7 pt-2 pt-5" />
  </StrictMode>
);
