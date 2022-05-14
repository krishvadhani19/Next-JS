import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the Page{slug}</h1>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat
          sint blanditiis id aperiam laboriosam ratione, necessitatibus repellat
          culpa optio velit officiis fugit.
        </div>
        <hr />
      </main>
    </div>
  );
};

export default slug;
