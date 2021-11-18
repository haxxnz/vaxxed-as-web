import format from "date-fns/format";
import isValid from "date-fns/isValid";
import {
  enGB as enLocale,
  zhCN as zhLocale,
  es as esLocale
} from "date-fns/locale";

export enum LOCALE {
  en = "en",
  "zh-hk" = "zh-hk",
  "zh-cn" = "zh-cn",
  es = "es"
}

export type DateOptions = {
  dateString: string;
  languageName: string;
};

const formatDate = ({ dateString, languageName }: DateOptions): string => {
  const baseFormat = "dd MMM yyyy";
  const locales = {
    en: enLocale,
    "zh-hk": zhLocale,
    "zh-cn": zhLocale,
    es: esLocale
  };
  const localizedFormat = languageName.startsWith("zh")
    ? "yyyy年M月d日"
    : baseFormat;
  const toDate = new Date(dateString);

  if (isValid(toDate)) {
    const formatted = format(toDate, localizedFormat, {
      locale: locales[languageName as LOCALE]
    });
    return formatted;
  }
  return dateString;
};

export default formatDate;
