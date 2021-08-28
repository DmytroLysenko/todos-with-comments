import React from "react";

import styles from "./todoList.module.css";

function ToDoList({ todoList }) {
  return todoList.length ? (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.item}>
          <p>
            {todo.text} <span className={styles.commentsCount}>132</span>
          </p>

          <button type="button" className={styles.deleteBtn} onClick={() => {}}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no todos yet...</p>
  );
}

ToDoList.defaultProps = {
  todoList: [],
};

export default ToDoList;
