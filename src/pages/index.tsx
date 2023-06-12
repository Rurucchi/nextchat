import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NextChat</title>
        <meta name="description" content="Chatting app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>NextChat</h1>
        <div className={styles.grid}>
          <a href="/login" className={styles.card}>
            <h2 className={inter.className}>
              Join the chat!
              <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="/register"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              No account? <span>-&gt;</span>
            </h2>
          </a>
        </div>
      </main>
    </>
  );
}
