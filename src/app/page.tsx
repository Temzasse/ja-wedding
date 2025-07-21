"use client";

import Image from "next/image";
import { useState } from "react";
import { LanguageContent } from "./components/language-content";
import { LanguageSelector } from "./components/language-selector";
import { StatementsEn } from "./games/statements-en";
import { StatementsFi } from "./games/statements-fi";
import { StatementsFr } from "./games/statements-fr";
import headerImg from "./header.png";
import styles from "./page.module.css";
import { AdilEn } from "./speeches/adil-en";
import { AdilFi } from "./speeches/adil-fi";
import { AdilFr } from "./speeches/adil-fr";
import { AilaEn } from "./speeches/aila-en";
import { AilaFi } from "./speeches/aila-fi";
import { AilaFr } from "./speeches/aila-fr";
import { HildaEn } from "./speeches/hilda-en";
import { HildaFi } from "./speeches/hilda-fi";
import { HildaFr } from "./speeches/hilda-fr";
import { MarieEn } from "./speeches/marie-en";
import { MarieFi } from "./speeches/marie-fi";
import { MarieFr } from "./speeches/marie-fr";
import { MathisEn } from "./speeches/mathis-en";
import { MathisFi } from "./speeches/mathis-fi";
import { MathisFr } from "./speeches/mathis-fr";
import { MickaelEn } from "./speeches/mickael-en";
import { MickaelFi } from "./speeches/mickael-fi";
import { MickaelFr } from "./speeches/mickael-fr";
import { MoonaEn } from "./speeches/moona-en";
import { MoonaFi } from "./speeches/moona-fi";
import { MoonaFr } from "./speeches/moona-fr";
import { PierrickValerieEn } from "./speeches/pierrick-valerie-en";
import { PierrickValerieFi } from "./speeches/pierrick-valerie-fi";
import { PierrickValerieFr } from "./speeches/pierrick-valerie-fr";
import { TeemuEn } from "./speeches/teemu-en";
import { TeemuFi } from "./speeches/teemu-fi";
import { TeemuFr } from "./speeches/teemu-fr";
import { ThereseMichelEn } from "./speeches/therese-michel-en";
import { ThereseMichelFi } from "./speeches/therese-michel-fi";
import { ThereseMichelFr } from "./speeches/therese-michel-fr";

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

        <h1 className={styles.title}>Anne & Julien</h1>

        <LanguageSelector
          language={language}
          onChange={(lang) => setLanguage(lang)}
        />

        <div className={styles.sections}>
          <LanguageContent
            en={<StatementsEn />}
            fr={<StatementsFr />}
            fi={<StatementsFi />}
            language={language}
          />
          <LanguageContent
            en={<AdilEn />}
            fr={<AdilFr />}
            fi={<AdilFi />}
            language={language}
          />
          <LanguageContent
            en={<AilaEn />}
            fr={<AilaFr />}
            fi={<AilaFi />}
            language={language}
          />
          <LanguageContent
            en={<HildaEn />}
            fr={<HildaFr />}
            fi={<HildaFi />}
            language={language}
          />
          <LanguageContent
            en={<MarieEn />}
            fr={<MarieFr />}
            fi={<MarieFi />}
            language={language}
          />
          <LanguageContent
            en={<MathisEn />}
            fr={<MathisFr />}
            fi={<MathisFi />}
            language={language}
          />
          <LanguageContent
            en={<MoonaEn />}
            fr={<MoonaFr />}
            fi={<MoonaFi />}
            language={language}
          />
          <LanguageContent
            en={<PierrickValerieEn />}
            fr={<PierrickValerieFr />}
            fi={<PierrickValerieFi />}
            language={language}
          />
          <LanguageContent
            en={<TeemuEn />}
            fr={<TeemuFr />}
            fi={<TeemuFi />}
            language={language}
          />
          <LanguageContent
            en={<MickaelEn />}
            fr={<MickaelFr />}
            fi={<MickaelFi />}
            language={language}
          />
          <LanguageContent
            en={<ThereseMichelEn />}
            fr={<ThereseMichelFr />}
            fi={<ThereseMichelFi />}
            language={language}
          />
        </div>
      </main>
    </div>
  );
}
