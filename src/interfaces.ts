export interface ITime {
  seconds: (n: number) => number;
  secs?: (n: number) => number;
  s?: (n: number) => number;

  minutes: (n: number) => number;
  mins?: (n: number) => number;
  m?: (n: number) => number;

  hours: (n: number) => number;
  hs?: (n: number) => number;
  h?: (n: number) => number;
  
  days: (n: number) => number;
  d?: (n: number) => number;
  
  weeks: (n: number) => number;
  w?: (n: number) => number;
  
  milliseconds: (n: number) => number;
  mills?: (n: number) => number;
  ms?: (n: number) => number;

  parse?: (str: string) => number;
}

export interface ISize {
  kb: (n: number) => number;
  kilobytes: (n: number) => number;

  mb: (n: number) => number;
  megabytes: (n: number) => number;
  
  gb: (n: number) => number;
  gigabytes: (n: number) => number;

  tb: (n: number) => number;
  terabytes: (n: number) => number;

  pb: (n: number) => number;
  petabytes: (n: number) => number;

  b: (n: number) => number;
  bytes: (n: number) => number;

  parse?: (str: string) => number;
}
