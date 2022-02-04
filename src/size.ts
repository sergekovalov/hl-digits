import { SIZE } from './constants';
import { ISize } from './interfaces';
import { parse } from './utils';

const size: ISize = {
  kb: (n: number) => n * SIZE,
  kilobytes: (n: number) => n * SIZE,

  mb: (n: number) => n * size.kb(SIZE),
  megabytes: (n: number) => n * size.kb(SIZE),

  gb: (n: number) => n * size.mb(SIZE),
  gigabytes: (n: number) => n * size.mb(SIZE),

  tb: (n: number) => n * size.gb(SIZE),
  terabytes: (n: number) => n * size.gb(SIZE),

  pb: (n: number) => n * size.tb(SIZE),
  petabytes: (n: number) => n * size.tb(SIZE),

  b: (n: number) => n,
  bytes: (n: number) => n,
};

size.parse = (str: string) => parse(size, str);

export default size;
