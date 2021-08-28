import React, { useState } from "react";

import styles from "./todoAddForm.module.css";

export default function ToDoAddForm({ onAddToDo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAddToDo(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.ctrlKey === true) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type name here..."
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className={styles.submitBtn}>
        Add new
      </button>
    </form>
  );
}
