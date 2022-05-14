import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Popular Blogs</h2>
        <div className={styles.blogItem}>
          <Link href="/blogpost/how-to-learn-js">
            <h3>How to learn JavaScript</h3>
          </Link>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </div>
    </main>
  );
};

export default blog;
