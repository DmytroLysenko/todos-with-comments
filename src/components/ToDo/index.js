import React from "react";

import ToDoAddForm from "./ToDoAddForm";
import ToDoList from "./ToDoList";

import styles from "./todo.module.css";

const todoList = [
  {
    id: 1,
    text: "First item with custom name",
  },
  {
    id: 2,
    text: "Second  item is active",
  },
];

export default function ToDo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Items</h2>
      <ToDoAddForm />
      <ToDoList todoList={todoList} />
    </div>
  );
}
