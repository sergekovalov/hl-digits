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
};

ByteUnit.parse = (str: string) => parse(ByteUnit, str);

export default ByteUnit;
