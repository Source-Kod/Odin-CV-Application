import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./Header.tsx";
import { LeftForm } from "./LeftForm.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <div className="flex justify-evenly">
      <LeftForm />
    </div>
  </React.StrictMode>,
);
