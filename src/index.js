import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";

import ToDoPage from "./Views/ToDoPage";

ReactDOM.render(
  <React.StrictMode>
    <ToDoPage />
  </React.StrictMode>,
  document.getElementById("root")
);
