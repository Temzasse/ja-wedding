import { type ReactNode } from "react";
import styles from "./language-content.module.css";

export function LanguageContent({
  fi,
  en,
  fr,
  language,
}: {
  fi?: ReactNode;
  en?: ReactNode;
  fr?: ReactNode;
  language: "en" | "fi" | "fr";
}) {
  if (language === "fi" && !fi) {
    return null;
  }
  if (language === "en" && !en) {
    return null;
  }
  if (language === "fr" && !fr) {
    return null;
  }
  return (
    <div className={styles.languageContent}>
      {language === "fi" && fi}
      {language === "en" && en}
      {language === "fr" && fr}
    </div>
  );
}
