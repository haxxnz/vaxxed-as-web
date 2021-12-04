/* eslint-disable no-use-before-define */

export enum Locale {
  ar = "ar",
  de = "de",
  en = "en",
  es = "es",
  fa = "fa",
  fr = "fr",
  hi = "hi",
  mi = "mi",
  nl = "nl",
  pt = "pt",
  ru = "ru",
  sm = "sm",
  "zh-cn" = "zh-cn",
  "zh-hk" = "zh-hk"
}

export type Locales = {
  [key in Locale]: Translation;
};

export type Translation = {
  cameraPermissionDialog: CameraPermissionDialog;
  footer: Footer;
  header: Header;
  inputPage: InputPage;
  invalidCodes: InvalidCodes;
  modeSelector: ModeSelector;
  thisLanguage: ThisLanguage;
  verificationDialog: VerificationDialog;
};

export type VerificationDialog = {
  "Attention needed": string;
  Close: string;
  "Copy results": string;
  "Date of birth": string;
  "First name": string;
  "Last name": string;
  Success: string;
  Valid: string;
  "Verification results": string;
  "View details": string;
  onlyForVerificationPurposes: string;
  yes: string;
};

export type ThisLanguage = {
  callToAction: string;
  name: string;
};

export type ModeSelector = {
  useBarcode: UseBarcode;
  useCamera: UseBarcode;
};

export type UseBarcode = {
  callToAction: string;
  intro: string;
};

export type InvalidCodes = {
  expired: string;
  invalid: string;
  notAcovidPass: string;
};

export type InputPage = {
  "Enter QR code": string;
  Verify: string;
};

export type Header = {
  "Change language": string;
  "Scan your NZ COVIDpass": string;
};

export type Footer = {
  disclaimer: string;
  privacy: string;
};

export type CameraPermissionDialog = {
  callToAction: string;
  content: string;
  title: string;
};
