import Image from "next/image";
import { Suspense } from "react";

import headerImg from "./header.png";
import styles from "./page.module.css";
import { Speeches } from "./speeches";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={headerImg}
          alt=""
          layout="responsive"
          priority
        />

        <h1 className={styles.title}>Anne & Julien</h1>

        <Suspense fallback={null}>
          <Speeches />
        </Suspense>
      </main>
    </div>
  );
}
