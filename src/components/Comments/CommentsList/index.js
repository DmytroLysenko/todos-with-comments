import React from "react";

import styles from "./commentsList.module.css";

function CommentsList({ commentsList }) {
  return commentsList.length ? (
    <ul className={styles.list}>
      {commentsList.map((comment) => (
        <li key={comment.id} className={getStyle()}>
          {comment.text}
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no comments yet...</p>
  );
}

CommentsList.defaultProps = {
  commentsList: [],
};

export default CommentsList;

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
