import { KILOBYTE_UNIT_SIZE } from './constants';
import { IByteUnit } from './interfaces';
import { parse } from './utils';

const ByteUnit: IByteUnit = {
  kb: (n: number) => n * KILOBYTE_UNIT_SIZE,
  kilobytes: (n: number) => n * KILOBYTE_UNIT_SIZE,

  mb: (n: number) => n * ByteUnit.kb(KILOBYTE_UNIT_SIZE),
  megabytes: (n: number) => n * ByteUnit.kb(KILOBYTE_UNIT_SIZE),

  gb: (n: number) => n * ByteUnit.mb(KILOBYTE_UNIT_SIZE),
  gigabytes: (n: number) => n * ByteUnit.mb(KILOBYTE_UNIT_SIZE),

  tb: (n: number) => n * ByteUnit.gb(KILOBYTE_UNIT_SIZE),
  terabytes: (n: number) => n * ByteUnit.gb(KILOBYTE_UNIT_SIZE),

  pb: (n: number) => n * ByteUnit.tb(KILOBYTE_UNIT_SIZE),
  petabytes: (n: number) => n * ByteUnit.tb(KILOBYTE_UNIT_SIZE),

  b: (n: number) => n,
  bytes: (n: number) => n,
  
  parse: (str: string) => parse(ByteUnit, str),
  toString: (value: string, as: string, representation: 'decimal' | 'binary' = 'decimal'): string => {
      const bytes = ByteUnit.parse(value);
      const MULTILPIER = representation === 'decimal' ? 1000 : KILOBYTE_UNIT_SIZE;
  
      switch(as) {
        case 'kb':
          return `${(bytes / MULTILPIER).toFixed(1)}kb`;
        case 'mb':
          return `${(bytes / (MULTILPIER ** 2)).toFixed(1)}mb`;
        case 'gb':
          return `${(bytes / (MULTILPIER ** 3)).toFixed(1)}gb`;
        case 'tb':
          return `${(bytes / (MULTILPIER ** 4)).toFixed(1)}tb`;
        case 'pb':
          return `${(bytes / (MULTILPIER ** 5)).toFixed(1)}pb`;
      }
    }
};


export default ByteUnit;
