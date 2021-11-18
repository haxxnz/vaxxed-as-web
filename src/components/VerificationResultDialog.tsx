/* eslint-disable no-promise-executor-return */
import { Fragment, useRef, useState } from "react";
import { observer } from "mobx-react";
import { Dialog, Transition } from "@headlessui/react";
import {
  QrcodeIcon,
  XIcon,
  ExclamationIcon,
  SwitchHorizontalIcon
} from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import ReactMarkdown from "react-markdown";
import { useLocation } from "@reach/router";
import ReactCardFlip from "react-card-flip";
import useStores from "../hooks/useStores";
import { VerificationStatus } from "../stores/uiStore";
import formatDate from "../utils/formatDate";

const VerificationResultDialog = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const {
    uiStore,
    uiStore: { verificationStatus }
  } = useStores();
  const [translate] = useTranslation();
  const location = useLocation();

  const languageName =
    location?.pathname?.split("/")?.filter(path => path !== "")?.[0] ?? "en";

  const {
    status,
    payload: {
      verification: { violates, success, credentialSubject }
    }
  }: VerificationStatus = verificationStatus;

  const getTranslation = (code: string) => {
    switch (code) {
      case "2.1.0.4.3":
        return "expired";
      case "4.4":
        return "notAcovidPass";
      default:
        return "invalid";
    }
  };

  const toggleFlipped = async () => {
    setIsFlipped(!isFlipped);
    await new Promise(resolve => setTimeout(() => resolve(true), 300));
    setIsVisible(!isVisible);
  };

  const closeDialog = () => {
    setIsFlipped(false);
    setIsVisible(true);
    uiStore.resetVerificationStatus();
  };

  return (
    <Transition.Root as={Fragment} show={status === "success"}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={closeButtonRef}
        onClose={closeDialog}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>
          <span
            aria-hidden="true"
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
          >
            &#8203;
          </span>
          {success && (
            <div className="fireworks">
              <div className="before" />
              <div className="after" />
            </div>
          )}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-md p-2 overflow-hidden text-gray-700 align-bottom transition-all transform bg-white shadow-xl text-starts dark:bg-gray-50 stripped-background rounded-3xl sm:my-8 sm:align-middle">
              <div className="bg-gray-600 shadow-md dark:bg-gray-800 rounded-3xl">
                <div className="w-full p-3 text-gray-100 dark:text-gray-300">
                  <div className="flex items-center justify-end">
                    <button
                      ref={closeButtonRef}
                      aria-label={translate("verificationDialog.Close")}
                      className="z-10 inline-flex items-center p-2 border border-gray-500 rounded-full shadow-sm hover:bg-gray-500 focus:outline-none"
                      type="button"
                      onClick={closeDialog}
                    >
                      <XIcon aria-hidden="true" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full h-10 realtive">
                    <div className="absolute flex items-center justify-center w-full">
                      <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg dark:bg-gray-200">
                        <QrcodeIcon
                          aria-hidden="true"
                          className={`${
                            !success && status === "success"
                              ? "text-red-600 dark:text-red-700"
                              : "text-green-600 dark:text-green-700"
                          } w-14 h-14`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-around w-full bg-white dark:bg-gray-600 rounded-3xl dark:text-gray-300">
                    <div className="w-full px-8 pt-12 pb-8 space-y-4 overflow-auto">
                      <h1 className="text-2xl font-bold text-center bg-white dark:font-medium dark:bg-gray-600">
                        <Trans i18nKey="verificationDialog.Verification results">
                          Verification results
                        </Trans>
                      </h1>
                      <ReactCardFlip
                        containerClassName="w-full"
                        flipDirection="horizontal"
                        isFlipped={isFlipped}
                      >
                        <div
                          className={`transition duration-300 w-full bg-white dark:bg-gray-600 space-y-6 ${
                            isVisible ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <dl
                            className={`w-full space-y-3 ${
                              success
                                ? ""
                                : "absolute opacity-5 pointer-events-none"
                            }`}
                          >
                            <div>
                              <dt>
                                <p className="text-sm leading-tight">
                                  <Trans i18nKey="verificationDialog.First name">
                                    First name
                                  </Trans>
                                </p>
                              </dt>
                              <dd>
                                <p className="text-lg font-bold leading-tight dark:font-medium">
                                  {credentialSubject?.givenName ?? " . "}
                                </p>
                              </dd>
                            </div>
                            <div className="w-full h-px bg-gray-200 dark:bg-gray-500" />
                            <div>
                              <dt>
                                <p className="text-sm leading-tight">
                                  <Trans i18nKey="verificationDialog.Last name">
                                    Last name
                                  </Trans>
                                </p>
                              </dt>
                              <dd>
                                <p className="text-lg font-bold leading-tight dark:font-medium">
                                  {credentialSubject?.familyName ?? " . "}
                                </p>
                              </dd>
                            </div>
                            <div className="w-full h-px bg-gray-200 dark:bg-gray-500" />
                            <div>
                              <dt>
                                <p className="text-sm leading-tight">
                                  <Trans i18nKey="verificationDialog.Date of birth">
                                    Date of birth
                                  </Trans>
                                </p>
                              </dt>
                              <dd>
                                <p className="text-lg font-bold leading-tight dark:font-medium">
                                  {credentialSubject?.dob
                                    ? formatDate({
                                        dateString: credentialSubject.dob,
                                        languageName
                                      })
                                    : " . "}
                                </p>
                              </dd>
                            </div>
                          </dl>
                          <div className="p-4 rounded-2xl bg-blue-50">
                            <div className="flex space-start-3">
                              <div className="flex-shrink-0">
                                <BadgeCheckIcon
                                  aria-hidden="true"
                                  className="w-8 h-8 text-blue-500"
                                />
                              </div>
                              <div className="space-y-2">
                                <div className="text-gray-700">
                                  <ReactMarkdown className="prose">
                                    {translate(
                                      "verificationDialog.onlyForVerificationPurposes"
                                    )}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`transition duration-300 w-full bg-white dark:bg-gray-600 ${
                            !isVisible ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="overflow-x-scroll text-xs">
                            <pre className="font-mono">
                              <code>
                                {JSON.stringify(verificationStatus, null, 2)}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </ReactCardFlip>
                      {!success && status === "success" && (
                        <div className="p-4 rounded-2xl bg-orange-50">
                          <div className="flex space-start-3">
                            <div className="flex-shrink-0">
                              <ExclamationIcon
                                aria-hidden="true"
                                className="w-8 h-8 text-orange-500"
                              />
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-xl font-bold leading-8 text-orange-500 dark:font-medium">
                                <Trans i18nKey="verificationDialog.Attention needed">
                                  Attention needed
                                </Trans>
                              </h3>
                              <div className="text-gray-700">
                                <ReactMarkdown className="prose">
                                  {translate(
                                    `invalidCodes.${getTranslation(
                                      violates?.section
                                    )}`,
                                    {
                                      link:
                                        violates?.link ??
                                        "https://nzcp.covid19.health.nz"
                                    }
                                  )}
                                </ReactMarkdown>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex w-full overflow-hidden bg-gray-500 shadow-md dark:bg-gray-700 rounded-3xl dark:text-gray-300">
                      <span className="w-full">
                        <button
                          className="z-10 flex items-center justify-center w-full px-2 py-5 text-xl text-center text-gray-200 transform shadow-sm cursor-pointer space-start-3 focus:outline-none hover:bg-gray-700 rounded-3xl dark:hover:bg-gray-800 active:scale-95"
                          type="button"
                          onClick={toggleFlipped}
                        >
                          <SwitchHorizontalIcon
                            aria-hidden="true"
                            className="w-6 h-6"
                          />
                          <span>
                            <Trans i18nKey="verificationDialog.View details">
                              View details
                            </Trans>
                          </span>
                        </button>
                      </span>
                      <span className="w-full">
                        <button
                          className="z-10 flex items-center justify-center w-full px-2 py-5 text-xl text-center text-gray-200 transform shadow-sm cursor-pointer space-start-3 focus:outline-none hover:bg-gray-700 rounded-3xl dark:hover:bg-gray-800 active:scale-95"
                          type="button"
                          onClick={closeDialog}
                        >
                          <span>
                            <Trans i18nKey="verificationDialog.Close">
                              Close
                            </Trans>
                          </span>
                          <XIcon aria-hidden="true" className="w-6 h-6" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default observer(VerificationResultDialog);
