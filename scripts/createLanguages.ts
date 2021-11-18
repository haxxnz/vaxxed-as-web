/* eslint-disable camelcase */
import fsExtra from "fs-extra";

const { readdirSync, outputJSON, readJSON } = fsExtra;

const LOCALES_FOLDER = "./locales";
const JSON_OUTPUT_OPTIONS = { spaces: 2 };
const RTL_LANGUAGES = ["ar", "fa", "he", "ps", "ur", "sd"];

type Header = {
  "Scan your NZ COVID pass": string;
};

type ThisLanguage = {
  name: string;
  callToAction: string;
};

type Translation = {
  language: string;
  header: Header;
  thisLanguage: ThisLanguage;
  isRTL: boolean;
};

const createLanguages = async (): Promise<void> => {
  const languages: string[] = readdirSync(LOCALES_FOLDER);

  await outputJSON(
    "./src/config/languages.json",
    languages,
    JSON_OUTPUT_OPTIONS
  );

  const translations: Translation[] = await Promise.all(
    languages.map(async (language: string) => {
      const { header, thisLanguage } = await readJSON(
        `${LOCALES_FOLDER}/${language}/translation.json`
      );
      const isRTL = RTL_LANGUAGES.includes(language);
      return { header, thisLanguage, language, isRTL };
    })
  );

  const localize = translations
    .filter(({ language }) => language !== "en")
    .map(({ header, language, isRTL }) => {
      const description =
        header?.["Scan your NZ COVIDpass"] ?? "Scan your NZ COVIDpass";
      const lang = language;
      const name = "Vaxxed As!";
      const short_name = "vaxxed.as";
      const start_url = `/${language}/`;
      const dir = isRTL ? "rtl" : "ltr";
      const localization = {
        description,
        dir,
        lang,
        name,
        short_name,
        start_url
      };
      return localization;
    });

  const languageOptions = translations.map(
    ({ thisLanguage: { name, callToAction }, language, isRTL, header }) => {
      const option = {
        value: language,
        name,
        callToAction,
        isRTL,
        changeLanguage: header["Change language"]
      };
      return option;
    }
  );

  const precachePages = translations
    .filter(({ language }) => language !== "en")
    .map(({ language }) => {
      const page = `/${language}/`;
      return page;
    });

  await outputJSON(
    "./i18n.json",
    { languages, localize, precachePages },
    JSON_OUTPUT_OPTIONS
  );

  await outputJSON(
    "./src/data/languageOptions.json",
    languageOptions,
    JSON_OUTPUT_OPTIONS
  );
};

createLanguages();
