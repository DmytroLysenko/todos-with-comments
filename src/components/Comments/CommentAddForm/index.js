import React, { useContext, useState } from "react";

import styles from "./commentAddForm.module.css";

import { MyContext } from "../../../Views/ToDoPage";

export default function CommentsAddForm() {
  const [text, setText] = useState("");
  const { handleAddComment } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    handleAddComment(text);
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
