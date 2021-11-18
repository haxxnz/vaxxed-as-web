import util from "util";
import cbor from "cbor";

global.TextDecoder = util.TextDecoder;
global.TextEncoder = util.TextEncoder;

export type DecodeCBOR = {
  err?: Error | undefined;
  tag?: number;
  value?: unknown[];
};

export const encodeCBOR = (object: (string | Buffer)[]): Buffer =>
  cbor.encode(object);
export const decodeCBOR = (buffer: Buffer | Uint8Array): DecodeCBOR =>
  cbor.decode(buffer);
