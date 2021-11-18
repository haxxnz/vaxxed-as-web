import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { TranslateIcon } from "@heroicons/react/outline";
import { useLocation } from "@reach/router";
import { useInterval } from "react-interval-hook";
import languages from "../data/languageOptions.json";

type LanguageOption = {
  value: string;
  name: string;
  callToAction: string;
  isRTL: boolean;
  changeLanguage: string;
};

const languageOptions: LanguageOption[] = languages;

const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

const LanguageSelector = () => {
  const [languageIndex, setLanguageIndex] = useState<number>(0);
  const location = useLocation();
  const { changeLanguage } = useI18next();

  const languageName =
    location?.pathname?.split("/")?.filter(path => path !== "")?.[0] ?? "en";

  const before = languageOptions.filter(({ value }) => value === languageName);
  const after = languageOptions
    .filter(({ value }) => value !== languageName)
    .sort((a, b) => a.name.localeCompare(b.name));

  const options = [...before, ...after];

  const { stop } = useInterval(() => {
    const newIndex = languageIndex + 1;
    if (newIndex >= languageOptions.length) {
      setLanguageIndex(0);
      stop();
      return;
    }
    setLanguageIndex(newIndex);
  }, 4000);

  return (
    <Listbox value={languageName} onChange={value => changeLanguage(value)}>
      {({ open }) => (
        <div className="relative">
          <div className="inline-flex divide-x divide-indigo-600 rounded-r-full shadow-sm">
            <div className="relative z-0 inline-flex divide-x divide-indigo-600 rounded-r-full shadow-sm">
              <div className="relative inline-flex items-center px-4 py-2 text-white bg-indigo-900 border border-transparent pends-8 space-start-2.5">
                <TranslateIcon
                  aria-hidden="true"
                  className="hidden w-5 h-5 sm:block"
                />
                <p className="text-sm font-medium">
                  {options.map(({ changeLanguage, value }, index) => {
                    if (index === languageIndex) {
                      return <span key={value}>{changeLanguage}</span>;
                    }
                    return null;
                  })}
                </p>
              </div>
              <Listbox.Button className="relative inline-flex items-center p-2 text-sm font-medium text-white bg-indigo-500 rounded-full -ms-4 hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                <span className="sr-only">
                  <Trans i18nKey="header.Change language">
                    Change language
                  </Trans>
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-white"
                />
              </Listbox.Button>
            </div>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={open}
          >
            <Listbox.Options className="absolute z-50 mt-2 overflow-hidden overflow-y-auto bg-white divide-y divide-gray-200 rounded-md shadow-lg ends-0 origin-top-ends w-72 ring-1 ring-black ring-opacity-5 focus:outline-none max-h-96">
              {options.map(({ value, name, callToAction, isRTL }) => {
                return (
                  <Listbox.Option
                    key={value}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-500" : "text-gray-900",
                        "cursor-default select-none relative p-4 text-sm"
                      )
                    }
                    disabled={languageName === value}
                    value={value}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div
                          className={classNames(
                            "flex justify-between",
                            isRTL ? "text-right" : "text-left"
                          )}
                        >
                          <p
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              isRTL ? "text-right" : "text-left"
                            )}
                          >
                            {name}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? "text-white" : "text-indigo-500"
                              }
                            >
                              <CheckIcon
                                aria-hidden="true"
                                className="w-5 h-5"
                              />
                            </span>
                          ) : null}
                        </div>
                        <p
                          className={classNames(
                            active ? "text-indigo-200" : "text-gray-500",
                            isRTL ? "text-right" : "text-left",
                            "mt-2"
                          )}
                        >
                          {callToAction}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default LanguageSelector;
