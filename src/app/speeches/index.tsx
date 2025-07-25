"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./index.module.css";
import { LanguageContent } from "../components/language-content";
import { LanguageSelector } from "../components/language-selector";
import { AdilEn } from "./adil-en";
import { AdilFi } from "./adil-fi";
import { AdilFr } from "./adil-fr";
import { AilaEn } from "./aila-en";
import { AilaFi } from "./aila-fi";
import { AilaFr } from "./aila-fr";
import { HildaEn } from "./hilda-en";
import { HildaFi } from "./hilda-fi";
import { HildaFr } from "./hilda-fr";
import { MarieEn } from "./marie-en";
import { MarieFi } from "./marie-fi";
import { MarieFr } from "./marie-fr";
import { MathisEn } from "./mathis-en";
import { MathisFi } from "./mathis-fi";
import { MathisFr } from "./mathis-fr";
import { MickaelEn } from "./mickael-en";
import { MickaelFi } from "./mickael-fi";
import { MickaelFr } from "./mickael-fr";
import { MoonaEn } from "./moona-en";
import { MoonaFi } from "./moona-fi";
import { MoonaFr } from "./moona-fr";
import { PierrickValerieEn } from "./pierrick-valerie-en";
import { PierrickValerieFi } from "./pierrick-valerie-fi";
import { PierrickValerieFr } from "./pierrick-valerie-fr";
import { TeemuEn } from "./teemu-en";
import { TeemuFi } from "./teemu-fi";
import { TeemuFr } from "./teemu-fr";
import { ThereseMichelEn } from "./therese-michel-en";
import { ThereseMichelFi } from "./therese-michel-fi";
import { ThereseMichelFr } from "./therese-michel-fr";

export function Speeches() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const languageParam = searchParams.get("lang");
  const [language, setLanguage] = useState<"en" | "fi" | "fr">(
    languageParam === "fi" || languageParam === "fr" ? languageParam : "en"
  );

  const handleLanguageChange = (lang: "en" | "fi" | "fr") => {
    setLanguage(lang);
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.replace(`?${params.toString()}`);
  };

  return (
    <>
      <LanguageSelector
        language={language}
        onChange={(lang) => handleLanguageChange(lang)}
      />

      <div className={styles.sections}>
        <LanguageContent
          en={<PierrickValerieEn />}
          fr={<PierrickValerieFr />}
          fi={<PierrickValerieFi />}
          language={language}
        />
        <LanguageContent
          en={<AilaEn />}
          fr={<AilaFr />}
          fi={<AilaFi />}
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
          en={<TeemuEn />}
          fr={<TeemuFr />}
          fi={<TeemuFi />}
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
          en={<AdilEn />}
          fr={<AdilFr />}
          fi={<AdilFi />}
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
    </>
  );
}
