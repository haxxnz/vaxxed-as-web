// Note: ESLint is wrong here, looks like its been fixed in a later commit
// https://github.com/yannickcr/eslint-plugin-react/commit/87fe152af72761810b5e337fb8e07464cd0fc586
/* eslint-disable react/no-invalid-html-attribute */
import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";

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
        content={`vaxxed.as | ${translate("header.Scan your NZ COVIDpass")}`}
        name="description"
      />
      <title>vaxxed.as | {translate("header.Scan your NZ COVIDpass")}</title>
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/site.webmanifest" rel="manifest" />
      <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
      <meta content="#da532c" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />

      <meta content="website" property="og:type" />
      <meta content="https://vaxxed.as" property="og:url" />
      <meta
        content={`vaxxed.as | ${translate("header.Scan your NZ COVIDpass")}`}
        property="og:title"
      />
      <meta
        content={`vaxxed.as | ${translate("header.Scan your NZ COVIDpass")}`}
        property="og:description"
      />
      <meta content="https://vaxxed.as/og.png" property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="627" property="og:image:height" />

      <meta content="summary_large_image" property="twitter:card" />
      <meta content="https://vaxx.nz" property="twitter:url" />
      <meta
        content={`vaxxed.as | ${translate("header.Scan your NZ COVIDpass")}`}
        property="twitter:title"
      />
      <meta
        content={`vaxxed.as | ${translate("header.Scan your NZ COVIDpass")}`}
        property="twitter:description"
      />
      <meta content="https://vaxxed.as/og.png" property="twitter:image" />
    </Helmet>
  );
};

export default SEO;
