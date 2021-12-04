import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";
import languages from "../data/languageOptions.json";

type LanguageOption = {
  value: string;
  name: string;
  callToAction: string;
  isRTL: boolean;
};

const languageOptions: LanguageOption[] = languages;

const rtlLanguages = ["ar", "fa", "he", "ps", "ur", "sd"];

const SEO = (): JSX.Element => {
  const location = useLocation();
  const [translate] = useTranslation();

  const languageName =
    location?.pathname?.split("/")?.filter(path => path !== "")?.[0] ?? "en";

  const isRtl = rtlLanguages.includes(languageName);

  return (
    <Helmet
      htmlAttributes={{
        dir: isRtl ? "rtl" : "ltr",
        lang: languageName
      }}
    >
      <meta
        content={`vaxxed.as | ${translate(
          "header.Scan your NZ COVIDpass"
        ).replace("header", "")}`}
        name="description"
      />
      <title>
        vaxxed.as |{" "}
        {translate("header.Scan your NZ COVIDpass").replace("header", "")}
      </title>
      {languageOptions
        .filter(({ value }) => value !== languageName)
        .map(({ value, callToAction }) => (
          <link
            key={value}
            href={`https://vaxxed.as/${value === "en" ? "" : `${value}/`}`}
            hrefLang={value}
            rel="alternate"
            title={callToAction}
          />
        ))}
      <meta content="website" property="og:type" />
      <meta content="https://vaxxed.as" property="og:url" />
      <meta content={languageName} property="og:locale" />
      <meta
        content={`vaxxed.as | ${translate(
          "header.Scan your NZ COVIDpass"
        ).replace("header", "")}`}
        property="og:title"
      />
      <meta
        content={`vaxxed.as | ${translate(
          "header.Scan your NZ COVIDpass"
        ).replace("header", "")}`}
        property="og:description"
      />
      <meta
        content={`https://vaxxed.as/og/img/og-${languageName}.jpg`}
        property="og:image"
      />
      <meta content="1280" property="og:image:width" />
      <meta content="720" property="og:image:height" />

      <meta
        content={`https://vaxxed.as/og/video/og-${languageName}.mp4`}
        property="og:video"
      />
      <meta content="video/mp4" property="og:video:type" />
      <meta content="1280" property="og:video:width" />
      <meta content="720" property="og:video:height" />

      <meta content="summary_large_image" property="twitter:card" />
      <meta content="https://vaxx.nz" property="twitter:url" />
      <meta
        content={`vaxxed.as | ${translate(
          "header.Scan your NZ COVIDpass"
        ).replace("header", "")}`}
        property="twitter:title"
      />
      <meta
        content={`vaxxed.as | ${translate(
          "header.Scan your NZ COVIDpass"
        ).replace("header", "")}`}
        property="twitter:description"
      />
      <meta
        content={`https://vaxxed.as/og/img/og-${languageName}.jpg`}
        property="twitter:image"
      />
    </Helmet>
  );
};

export default SEO;
