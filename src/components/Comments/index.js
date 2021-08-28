import React from "react";

import CommentsAddForm from "./CommentAddForm";
import CommentsList from "./CommentsList";

import styles from "./comments.module.css";

export default function Comments({ commentsList, onAddComment }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      <CommentsList commentsList={commentsList} />
      <CommentsAddForm onAddComment={onAddComment} />
    </div>
  );
}
