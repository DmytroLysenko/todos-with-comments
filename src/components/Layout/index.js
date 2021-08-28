import React from "react";

import Header from "../Header";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mainSection}>{children}</div>
    </div>
  );
}
