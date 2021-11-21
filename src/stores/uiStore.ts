import { observable, action, makeObservable } from "mobx";
import { VerificationResult } from "@vaxxnz/nzcp";

export type VerificationPayLoad = {
  verification: VerificationResult;
  raw: string | null;
  timestamp: Date;
};

export type VerificationStatus = {
  status: string;
  payload: VerificationPayLoad;
};

const verificationStatus: VerificationStatus = {
  status: "",
  payload: {
    verification: {
      success: null,
      violates: null,
      credentialSubject: { givenName: null, familyName: null, dob: null }
    },
    raw: null,
    timestamp: null
  }
};

class UIStore {
  verificationStatus: VerificationStatus;

  constructor() {
    makeObservable(this, {
      verificationStatus: observable,
      setVerificationStatus: action,
      resetVerificationStatus: action
    });

    this.verificationStatus = verificationStatus;
  }

  setVerificationStatus(newVerificationStatus: VerificationStatus) {
    this.verificationStatus = newVerificationStatus;
  }

  resetVerificationStatus() {
    this.verificationStatus = verificationStatus;
  }
}

const uiStore = new UIStore();

export default uiStore;
