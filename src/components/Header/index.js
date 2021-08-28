import React from "react";

import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>DAIRY APP</h1>
      <p className={styles.about}>Comments with no sense</p>
    </div>
  );
}
