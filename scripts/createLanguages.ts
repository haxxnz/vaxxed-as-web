/* eslint-disable camelcase */
import fsExtra from "fs-extra";

const { readdirSync, outputJSON, readJSON } = fsExtra;

const LOCALES_FOLDER = "./locales";
const JSON_OUTPUT_OPTIONS = { spaces: 2 };

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
      return { header, thisLanguage, language };
    })
  );

  const localize = translations
    .filter(({ language }) => language !== "en")
    .map(({ header, language }) => {
      const description =
        header?.["Scan your NZ COVID pass"] ?? "Scan your NZ COVID pass";
      const lang = language;
      const name = "Vaxxed As!";
      const short_name = "vaxxed.as";
      const start_url = `/${language}/`;
      const localization = {
        description,
        lang,
        name,
        short_name,
        start_url
      };
      return localization;
    });

  const languageOptions = translations.map(
    ({ thisLanguage: { name, callToAction }, language }) => {
      const option = {
        value: language,
        name,
        callToAction
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
