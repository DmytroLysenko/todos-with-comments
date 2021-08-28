import React from "react";

import CommentsAddForm from "./CommentAddForm";
import CommentsList from "./CommentsList";

import styles from "./comments.module.css";

export default function Comments() {
  return (
    <div>
      <h2>Comments</h2>
      <CommentsAddForm />
      <CommentsList />
    </div>
  );
}
