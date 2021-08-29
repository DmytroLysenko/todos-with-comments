import React, { useContext } from "react";

import styles from "./commentsList.module.css";

import { MyContext } from "../../../Views/ToDoPage";

export default function CommentsList() {
  const { comments } = useContext(MyContext);

  return comments.length ? (
    <ul className={styles.list}>
      {comments.map((comment) => (
        <li key={comment.id} className={getStyle()}>
          {comment.text}
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no comments yet...</p>
  );
}

function* styleGenarator() {
  yield styles.item_Orange;
  yield styles.item_Blue;
  return;
}

let generator = styleGenarator();

function getStyle() {
  const result = generator.next();
  if (!result.done) {
    return result.value;
  } else {
    generator = styleGenarator();
    return generator.next().value;
  }
}
