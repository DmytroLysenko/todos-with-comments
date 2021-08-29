import React from "react";

import ToDoAddForm from "./ToDoAddForm";
import ToDoList from "./ToDoList";

import styles from "./todo.module.css";

export default function ToDo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Items</h2>
      <ToDoAddForm />
      <ToDoList />
    </div>
  );
}
