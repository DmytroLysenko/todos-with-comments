import React from "react";

import ToDoAddForm from "./ToDoAddForm";
import ToDoList from "./ToDoList";

export default function ToDo() {
  return (
    <div>
      <h2>Items</h2>
      <ToDoAddForm />
      <ToDoList />
    </div>
  );
}
