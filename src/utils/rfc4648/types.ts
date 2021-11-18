export interface Encoding {
  bits: number;
  chars: string;
  codes?: { [char: string]: number };
}

export interface ParseOptions {
  loose?: boolean;
  out?: new (size: number) => { [index: number]: number };
}

export interface StringifyOptions {
  pad?: boolean;
}
