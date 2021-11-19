import { Fragment } from "react";
import { QrcodeIcon } from "@heroicons/react/outline";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import loadable from "@loadable/component";
import LanguageSelector from "../components/LanguageSelector";
import { CameraPlaceholder } from "../components/QrCamera";
import SEO from "../components/SEO";

const QrCamera = loadable(() => import("../components/QrCamera"), {
  fallback: <CameraPlaceholder />
});

const VerificationResultDialog = loadable(
  () => import("../components/VerificationResultDialog")
);

const CameraRoute = () => {
  return (
    <Fragment>
      <SEO />
      <main className="relative flex flex-col items-center justify-center min-h-screen px-0 space-y-4 bg-gray-500 dark:bg-gray-700 sm:px-8 sm:py-8">
        <div className="z-10 flex flex-col w-full h-screen space-y-3 overflow-y-scroll bg-gray-600 shadow-2xl sm:bg-white sm:dark:bg-gray-600 sm:h-auto md:max-w-3xl sm:rounded-3xl">
          <div className="flex items-center justify-between object-cover w-full p-2 bg-white bg-center shadow-lg space-start-2 rounded-b-3xl stripped-background dark:bg-gray-50">
            <Link
              className="flex items-center p-2 bg-white space-start-2 md:p-4 rounded-3xl"
              to="/"
            >
              <QrcodeIcon
                aria-hidden="true"
                className="w-6 h-6 md:w-10 md:h-10"
              />
              <h1 className="font-bold text-md md:text-2xl">vaxxed.as</h1>
            </Link>
            <h2 className="hidden text-lg font-bold leading-none md:leading-tight md:text-2xl sm:block">
              <Trans i18nKey="header.Scan your NZ COVIDpass">
                Scan your NZ COVIDpass
              </Trans>
            </h2>
            <LanguageSelector />
          </div>
          <div className="relative z-0 p-1 lg:p-3">
            <div className="flex justify-center">
              <div className="w-full">
                <QrCamera />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center w-full p-4 md:max-w-3xl md:p-0">
          <article className="prose text-gray-500 dark:text-gray-300">
            <p className="leading-tight">
              <Trans i18nKey="footer.disclaimer">
                This is not an official Government website. For more information
                about the COVID pass, please go to
                https://nzcp.covid19.health.nz
              </Trans>
            </p>
            <p className="leading-tight">
              <Trans i18nKey="footer.privacy">
                The results of the scans are not shared to any entity; private,
                public, or governmental. No tracking whatsoever has been added
                to this site, if you find any issues, please email
                vaxxed@contrer.as
              </Trans>
            </p>
            <hr />
            <p className="text-sm leading-tight">
              Site created by{" "}
              <a
                className="text-sky-500"
                href="https://contrer.as"
                rel="noopener noreferrer"
              >
                Rafael Contreras
              </a>
              as a member of the
              <a
                className="text-sky-500"
                href="https://github.com/vaxxnz"
                rel="noopener noreferrer"
              >
                Vaxx.nz collective
              </a>
              . Source code at{" "}
              <a
                className="text-sky-500"
                href="https://github.com/vaxxnz/vaxxed-as-web"
                rel="noopener noreferrer"
              >
                https://github.com/vaxxnz/vaxxed-as-web
              </a>
            </p>
          </article>
        </footer>
        <VerificationResultDialog />
      </main>
    </Fragment>
  );
};

export default CameraRoute;
