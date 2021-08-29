import React, { useContext } from "react";

import styles from "./todoList.module.css";

import { MyContext } from "../../../Views/ToDoPage";

export default function ToDoList() {
  const { todos, handleDeleteTodo } = useContext(MyContext);

  return todos.length ? (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.item_Active}>
          <p>
            {todo.text} <span className={styles.commentsCount}>132</span>
          </p>

          <button
            type="button"
            className={styles.deleteBtn}
            onClick={() => handleDeleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no todos yet...</p>
  );
}

