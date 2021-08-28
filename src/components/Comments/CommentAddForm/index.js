import React, { useState } from "react";

import styles from "./commentAddForm.module.css";

export default function CommentsAddForm({ onAddComment }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAddComment(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.ctrlKey === true) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}
