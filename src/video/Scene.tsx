import { AbsoluteFill } from "remotion";
import SuperEllipse, { Preset } from "react-superellipse";
import { Vaxxed } from "../components/Vaxxed";
import { Locale } from "../data/types";
import { locales } from "../data/locales";

export type SceneProps = {
  locale: Locale;
  fireworks: boolean;
};

const Scene = ({ locale, fireworks }: SceneProps) => {
  return (
    <AbsoluteFill className="bg-sky-900">
      {fireworks && (
        <div className="fireworks">
          <div className="before" />
          <div className="after" />
        </div>
      )}
      <div className="absolute inset-0 flex">
        <div className="flex items-center justify-center w-1/3">
          <SuperEllipse
            className="h-80 w-80"
            r1={Preset.iOS.r1}
            r2={Preset.iOS.r2}
          >
            <Vaxxed className="h-80 w-80" />
          </SuperEllipse>
        </div>
        <div className="flex items-center justify-start w-2/3 p-8">
          <div className="space-y-4">
            <div className="leading-none text-white text-9xl">Vaxxed As</div>
            <div>
              <div className="text-5xl leading-none text-white">
                {locales[locale].header["Scan your NZ COVIDpass"]}
              </div>
              <div className="text-3xl leading-none text-white opacity-40">
                {locale !== Locale.en
                  ? locales[locale].thisLanguage.callToAction
                  : "\u00A0"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export { Scene };
