import { Locale } from "./types";

export type LanguageOption = {
  code: Locale;
  name: string;
  callToAction: string;
  isRTL: boolean;
  changeLanguage: string;
  title?: string;
  value: string;
};

const languageOptions: LanguageOption[] = [
  {
    code: Locale.ar,
    value: "ar",
    name: "عربي",
    callToAction: "استخدم vaxxed.as باللغة العربية",
    isRTL: true,
    changeLanguage: "غير اللغة",
    title: "مسح COVID الخاص بك في نيوزيلندا"
  },
  {
    code: Locale.de,
    value: "de",
    name: "Deutsch",
    callToAction: "Verwenden Sie vaxxed.as in Deutsch",
    isRTL: false,
    changeLanguage: "Sprache ändern",
    title: "Scannen Sie Ihren NZ CovidPass"
  },
  {
    code: Locale.en,
    value: "en",
    name: "English",
    callToAction: "Use vaxxed.as in English",
    isRTL: false,
    changeLanguage: "Change language",
    title: "Scan your NZ COVIDpass"
  },
  {
    code: Locale.es,
    value: "es",
    name: "Español",
    callToAction: "Utilice vaxxed.as en Español",
    isRTL: false,
    changeLanguage: "Cambiar idioma",
    title: "Escanea tu NZ COVIDPass"
  },
  {
    code: Locale.fa,
    value: "fa",
    name: "فارسی",
    callToAction: "استفاده از vaxxed.asبه زبان فارسی",
    isRTL: true,
    changeLanguage: "تغییر زبان",
    title: "CovidPass خود را اسکن نمایید. "
  },
  {
    code: Locale.fr,
    value: "fr",
    name: "Français",
    callToAction: "Utilisez vaxxed.as en Français",
    isRTL: false,
    changeLanguage: "Changer de langue",
    title: "Scannez votre CovidPass NZ"
  },
  {
    code: Locale.hi,
    value: "hi",
    name: "अंग्रेज़ी",
    callToAction: "हिंदी में vaxxed.as का प्रयोग करें",
    isRTL: false,
    changeLanguage: "भाषा बदलें",
    title: "अपने NZ COVIDPass को स्कैन करें"
  },
  {
    code: Locale.mi,
    value: "mi",
    name: "Te reo Māori",
    callToAction: "Whakamahia te vaxxed.as i te reo Māori",
    isRTL: false,
    changeLanguage: "Huri reo",
    title: "Matawai i to NZ COVIDpass"
  },
  {
    code: Locale.nl,
    value: "nl",
    name: "Dutch",
    callToAction: "Gebruik vaxxed.as in het Dutch",
    isRTL: false,
    changeLanguage: "Taal wijzigen",
    title: "Scan je NZ COVIDpass"
  },
  {
    code: Locale.pt,
    value: "pt",
    name: "Português",
    callToAction: "Use vaxxed.as em português",
    isRTL: false,
    changeLanguage: "Mudar língua",
    title: "Digitalize seu NZ CovidPass"
  },
  {
    code: Locale.ru,
    value: "ru",
    name: "Русский",
    callToAction: "Использовать vaxxed.as на русском",
    isRTL: false,
    changeLanguage: "Изменить язык",
    title: "Отсканируйте свой NZ COVIDPass"
  },
  {
    code: Locale.sm,
    value: "sm",
    name: "Samoa",
    callToAction: "Fa'aaoga le vaxxed.as o le gagana Samoa",
    isRTL: false,
    changeLanguage: "Suia le gagana",
    title: "Va&#39;ai lau NZ COVIDpass"
  },
  {
    code: Locale["zh-cn"],
    value: "zh-cn",
    name: "简体中文",
    callToAction: "使用 vaxxed.as 简体中文版",
    isRTL: false,
    changeLanguage: "改变语言",
    title: "扫描你的新西兰 CovidPass"
  },
  {
    code: Locale["zh-hk"],
    value: "zh-hk",
    name: "繁體中文",
    callToAction: "使用 vaxxed.as 繁體中文版",
    isRTL: false,
    changeLanguage: "更改語言",
    title: "掃描您的 NZ COVIDpass"
  }
];

export { languageOptions };
