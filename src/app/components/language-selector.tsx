import styles from "./language-selector.module.css";

export function LanguageSelector({
  language,
  onChange,
}: {
  language: "en" | "fi" | "fr";
  onChange: (lang: "en" | "fi" | "fr") => void;
}) {
  return (
    <div className={styles.languageButtons}>
      <button
        onClick={() => onChange("en")}
        className={styles.languageButton}
        data-active={language === "en"}
      >
        🇬🇧 In English
      </button>

      <button
        onClick={() => onChange("fr")}
        className={styles.languageButton}
        data-active={language === "fr"}
      >
        🇫🇷 En français
      </button>

      <button
        onClick={() => onChange("fi")}
        className={styles.languageButton}
        data-active={language === "fi"}
      >
        🇫🇮 Suomeksi
      </button>
    </div>
  );
}
