/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Encoding, ParseOptions, StringifyOptions } from "./types";
import { parse, stringify } from "./codec";

const base32Encoding: Encoding = {
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bits: 5
};

const base32Parse = (string: string, opts: ParseOptions = {}): Uint8Array => {
  return parse(
    opts.loose
      ? string
          .toUpperCase()
          .replace(/0/g, "O")
          .replace(/1/g, "L")
          .replace(/8/g, "B")
      : string,
    base32Encoding,
    opts
  );
};

const base32Stringify = (
  data: ArrayLike<number>,
  opts?: StringifyOptions
): string => {
  return stringify(data, base32Encoding, opts);
};

export { base32Parse, base32Stringify };
