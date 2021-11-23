/* eslint-disable no-promise-executor-return */
import { Fragment, useRef, useState } from "react";
import { observer } from "mobx-react";
import { Dialog, Transition } from "@headlessui/react";
import {
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

  const closeDialog = async () => {
    setIsFlipped(false);
    setIsVisible(true);

    /*
      Wait a couple of seconds to restart
      the verification process otherwise
      the dialog will show again on fast
      devices.
    */
    // await new Promise(resolve => setTimeout(() => resolve(true), 2000));
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
              <div
                className={`${
                  success && status === "success"
                    ? "bg-teal-600 dark:bg-teal-700"
                    : "bg-gray-600 dark:bg-gray-800"
                } shadow-md rounded-3xl`}
              >
                <div className="relative w-full p-3 text-gray-50 dark:text-gray-100">
                  <h2 className="mt-2 text-4xl font-extrabold text-center">
                    {success && status === "success"
                      ? translate("verificationDialog.Valid")
                      : "\u00A0"}
                  </h2>
                </div>
                <div className="w-full">
                  <div className="w-full realtive">
                    <div className="absolute flex items-center justify-end w-full px-2 mx-3 -mt-10">
                      <div className="flex items-center justify-center w-20 h-20">
                        {success && status === "success" && (
                          <Fragment>
                            <span className="absolute z-0 w-6 h-6 bg-white" />
                            <BadgeCheckIcon
                              aria-hidden="true"
                              className="absolute z-0 w-16 h-16 text-white dark:text-gray-100"
                            />
                            <BadgeCheckIcon
                              aria-hidden="true"
                              className="z-10 text-sky-500 dark:text-sky-600 w-14 h-14"
                            />
                          </Fragment>
                        )}
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
                          {!success && status === "success" && (
                            <div className="px-4 py-3 rounded-2xl bg-orange-50 dark:bg-orange-900">
                              <div className="space-y-2">
                                <h3 className="space-x-3 text-xl font-bold leading-8 text-orange-500 dark:text-orange-300 dark:font-medium">
                                  <ExclamationIcon
                                    aria-hidden="true"
                                    className="inline-block w-8 h-8 text-orange-500 dark:text-orange-300"
                                  />
                                  <span>
                                    <Trans i18nKey="verificationDialog.Attention needed">
                                      Attention needed
                                    </Trans>
                                  </span>
                                </h3>
                                <div className="text-gray-700 dark:text-gray-300">
                                  <ReactMarkdown className="leading-tight">
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
                          )}
                          <div className="px-4 py-3 rounded-2xl bg-sky-50 dark:bg-sky-900">
                            <div className="space-y-2">
                              <div className="text-gray-700 dark:text-gray-300">
                                <ReactMarkdown className="leading-tight">
                                  {translate(
                                    "verificationDialog.onlyForVerificationPurposes"
                                  )}
                                </ReactMarkdown>
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
                          ref={closeButtonRef}
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
          {success && (
            <div className="fireworks">
              <div className="before" />
              <div className="after" />
            </div>
          )}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default observer(VerificationResultDialog);
