import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import styles1 from "../styles/Home1.module.css";
// import styles2 from "../styles/Home2.module.css";
import Link from "next/link";
import Dummy from "../components/Dummy";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* to use style jsx of dummy overall you have to imort dummy first */}
      <Dummy />
      {/* style jsx */}
      <style jsx>{`
        .mySpan {
          color: red;
        }
      `}</style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainNav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="mySpan">Welcome to Hunting Coder</span>
        </h1>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        <div className="blog dummy">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn JavaScript</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
