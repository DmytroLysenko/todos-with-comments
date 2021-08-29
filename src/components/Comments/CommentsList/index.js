import React, { useContext } from "react";

import styles from "./commentsList.module.css";

import { MyContext } from "../../../Views/ToDoPage";

export default function CommentsList() {
  const { comments, activeTodoId } = useContext(MyContext);

  const commentsByTodo = comments.filter(
    (comment) => comment.todoId === activeTodoId
  );

  function* styleGenarator() {
    yield styles.item_Orange;
    yield styles.item_Blue;
    return;
  }

  let generator = styleGenarator();

  const getStyle = () => {
    const result = generator.next();
    if (!result.done) {
      return result.value;
    } else {
      generator = styleGenarator();
      return generator.next().value;
    }
  };

  return commentsByTodo.length ? (
    <ul className={styles.list}>
      {commentsByTodo.map((comment) => (
        <li key={comment.id} className={getStyle()}>
          {comment.text}
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.noCommentsMessage}>There are no comments yet...</p>
  );
}
