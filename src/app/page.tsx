"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import headerImg from "./header.png";
import { TeemuEn } from "./speeches/teemu-en";
import { TeemuFr } from "./speeches/teemu-fr";
import { LanguageContent } from "./components/language-content";
import { StatementsEn } from "./games/statements-en";
import { StatementsFi } from "./games/statements-fi";
import { StatementsFr } from "./games/statements-fr";
import { LanguageSelector } from "./components/language-selector";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "fi" | "fr">("en");

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

        <h1 className={styles.title}>Julien & Anne</h1>

        <div className={styles.sections}>
          <LanguageSelector
            language={language}
            onChange={(lang) => setLanguage(lang)}
          />
          <LanguageContent
            en={<StatementsEn />}
            fi={<StatementsFi />}
            fr={<StatementsFr />}
            language={language}
          />
          <LanguageContent
            en={<TeemuEn />}
            fr={<TeemuFr />}
            language={language}
          />
        </div>
      </main>
    </div>
  );
}
