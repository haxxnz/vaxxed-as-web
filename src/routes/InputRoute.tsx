import {
  Fragment,
  useReducer,
  ChangeEvent,
  useEffect,
  useRef,
  useState
} from "react";
import { autorun } from "mobx";
import { QrcodeIcon } from "@heroicons/react/outline";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import loadable from "@loadable/component";
import LazyHydrate from "react-lazy-hydration";
import { useGoal } from "gatsby-plugin-fathom";
import throttle from "lodash-es/throttle";
import LanguageSelector from "../components/LanguageSelector";
import SEO from "../components/SEO";
import useStores from "../hooks/useStores";
import QRcodeWorker from "../workers/QRcode.worker.ts";

const VerificationResultDialog = loadable(
  () => import("../components/VerificationResultDialog")
);

type InputState = {
  qrcode: string;
};

type ParseQrcodeProps = {
  imageData?: ImageData;
  trustedIssuers: string[];
  passString?: string;
};

const InputRoute = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const verifyButtonRef = useRef<HTMLButtonElement>(null);
  const [latestPayload, setLatestPayload] = useState(null);
  const qrCodeReader = useRef<
    Worker & {
      readQRcode: ({ passString }: ParseQrcodeProps) => Promise<string>;
    }
  >(null);
  const [inputValues, setInputValues] = useReducer(
    (state: InputState, newState: InputState) => ({ ...state, ...newState }),
    {
      qrcode: ""
    }
  );
  const [translate] = useTranslation();
  const {
    uiStore,
    uiStore: {
      verificationStatus: { status }
    }
  } = useStores();
  const handleGoal = useGoal("I4HV3NKK");

  const continuouslyVerify = async (value: string, isContinuous: boolean) => {
    if (qrCodeReader?.current) {
      qrCodeReader?.current
        ?.readQRcode({
          passString: value,
          trustedIssuers: [process.env.GATSBY_TRUSTED_ISSUER]
        })
        .then(async qrResults => {
          const { status, payload } = JSON.parse(qrResults);

          if (isContinuous) {
            if (payload?.verification?.success) {
              verifyButtonRef.current?.click();
              return null;
            }
          } else {
            handleGoal();
            setLatestPayload(payload);
            if (payload?.verification !== latestPayload?.verification) {
              setInputValues({ qrcode: "" });
              uiStore.setVerificationStatus({ status, payload });
            }
            return true;
          }
          return null;
        });
    }
  };

  const throttledContinuouslyVerify = useRef(throttle(continuouslyVerify, 500));

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const qrcode = value?.toLocaleUpperCase()?.trim();
    setInputValues({ qrcode });
    if (qrcode && qrcode.length > 300 && qrcode?.startsWith("NZCP:/")) {
      throttledContinuouslyVerify.current(qrcode, true);
    }
  };

  const handleVerify = () => {
    if (inputValues?.qrcode) {
      const raw = inputValues?.qrcode;
      continuouslyVerify(raw, false);
    }
    inputRef.current?.focus();
  };

  const initiateVerificationWorker = () => {
    if (!qrCodeReader.current) {
      qrCodeReader.current = new QRcodeWorker();
    }
  };

  useEffect(
    () =>
      autorun(() => {
        if (inputRef.current && status !== "success") {
          inputRef.current?.focus();
        }
      }),
    []
  );

  useEffect(() => {
    initiateVerificationWorker();
  }, []);

  return (
    <Fragment>
      <SEO />
      <LazyHydrate whenVisible>
        <VerificationResultDialog />
      </LazyHydrate>
      <main className="relative flex flex-col items-center justify-center min-h-screen px-0 space-y-6 bg-gray-500 dark:bg-gray-700 sm:px-8 sm:py-8">
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
                Scan your NZ COVID pass
              </Trans>
            </h2>
            <LanguageSelector />
          </div>
          <div className="relative z-0 p-3 lg:p-6">
            <div className="flex justify-center">
              <div className="w-full space-y-4">
                <fieldset>
                  <div className="space-y-6">
                    <div>
                      <label className="sr-only" htmlFor="qr-code">
                        QR code
                      </label>
                      <input
                        ref={inputRef}
                        autoComplete="off"
                        className="relative block w-full p-4 font-mono text-2xl text-center text-yellow-400 bg-transparent bg-gray-800 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 focus:z-10"
                        id="qrcode"
                        name="qrcode"
                        placeholder={translate("inputPage.Enter QR code")}
                        spellCheck={false}
                        type="text"
                        value={inputValues.qrcode}
                        onChange={handleOnChange}
                      />
                    </div>
                    <button
                      ref={verifyButtonRef}
                      className="relative block w-full p-4 text-4xl text-center text-white rounded-full bg-sky-700 focus:ring-sky-500 focus:border-sky-500 focus:z-10"
                      type="button"
                      onClick={handleVerify}
                    >
                      <Trans i18nKey="inputPage.Verify">Verify</Trans>
                    </button>
                  </div>
                </fieldset>
                <hr className="text-gray-300" />
                <div className="flex justify-center">
                  <div className="space-y-2">
                    <p className="text-lg opacity-70 dark:text-gray-200">
                      <Trans i18nKey="modeSelector.useCamera.intro">
                        Use vaxxed.as with a camera.
                      </Trans>
                    </p>
                    <Link
                      className="block px-6 py-2 text-xl font-medium text-center text-indigo-500 border border-indigo-500 rounded-full dark:border-indigo-300 dark:text-indigo-300 hover:border-indigo-600 dark:hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-800 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-50 focus:ring-indigo-500"
                      to="/"
                    >
                      <Trans i18nKey="modeSelector.useCamera.callToAction">
                        Verify with camera
                      </Trans>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center w-full p-4 md:max-w-3xl md:p-0">
          <article className="space-y-4 text-gray-100 dark:text-gray-400">
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
                className="text-sky-200 dark:text-sky-500"
                href="https://contrer.as"
                rel="noopener noreferrer"
              >
                Rafael Contreras
              </a>{" "}
              as a member of the{" "}
              <a
                className="text-sky-200 dark:text-sky-500"
                href="https://github.com/vaxxnz"
                rel="noopener noreferrer"
              >
                Vaxx.nz collective
              </a>
              . Source code at{" "}
              <a
                className="text-sky-200 dark:text-sky-500"
                href="https://github.com/vaxxnz/vaxxed-as-web"
                rel="noopener noreferrer"
              >
                https://github.com/vaxxnz/vaxxed-as-web
              </a>
            </p>
          </article>
        </footer>
      </main>
    </Fragment>
  );
};

export default InputRoute;
