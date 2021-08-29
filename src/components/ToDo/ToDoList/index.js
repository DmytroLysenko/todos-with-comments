import React, { useContext, useEffect } from "react";

import styles from "./todoList.module.css";

import { MyContext } from "../../../Views/ToDoPage";

export default function ToDoList() {
  const {
    todos,
    comments,
    activeTodoId,
    handleDeleteTodo,
    handleSetActiveTodo,
  } = useContext(MyContext);

  useEffect(() => {
    if (!activeTodoId) {
      if (todos && todos[0] && todos[0].id) {
        handleSetActiveTodo(todos[0].id);
      }
    }
  }, [activeTodoId, todos, handleSetActiveTodo]);

  const getCommentsCount = (todoId) => {
    return comments.filter((comment) => comment.todoId === todoId).length;
  };

  return todos.length ? (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleSetActiveTodo(todo.id)}
          className={
            todo.id === activeTodoId ? styles.item_Active : styles.item
          }
        >
          <p>
            {todo.text}{" "}
            <span className={styles.commentsCount}>
              {getCommentsCount(todo.id)}
            </span>
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
