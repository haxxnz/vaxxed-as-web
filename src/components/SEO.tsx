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
    </Helmet>
  );
};

export default SEO;
