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
  toString: (value: string, as: string = 'auto', representation: 'decimal' | 'binary' = 'binary'): string => {
      const bytes = ByteUnit.parse(value);
      const MULTILPIER = representation === 'decimal' ? 1000 : KILOBYTE_UNIT_SIZE;

      const suffixes = {
        1: 'kb',
        2: 'mb',
        3: 'gb',
        4: 'tb',
        5: 'pb'
      }
  
      switch(as) {
        case 'kb':
          return `${(bytes / MULTILPIER).toFixed(1)}${suffixes[1]}`;
        case 'mb':
          return `${(bytes / (MULTILPIER ** 2)).toFixed(1)}${suffixes[2]}`;
        case 'gb':
          return `${(bytes / (MULTILPIER ** 3)).toFixed(1)}${suffixes[3]}`;
        case 'tb':
          return `${(bytes / (MULTILPIER ** 4)).toFixed(1)}${suffixes[4]}`;
        case 'pb':
          return `${(bytes / (MULTILPIER ** 5)).toFixed(1)}${suffixes[5]}`;
        case 'auto':
        default:
          const suffix = bytes.toString().split('').reverse().join('').match(/.{1,3}/g).reverse().slice(1).length;
          
          return `${(bytes / (MULTILPIER ** suffix)).toFixed(1)}${suffixes[suffix]}`;
      }
    }
};


export default ByteUnit;
