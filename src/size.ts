import { ISize } from "./interfaces";
import { parse } from "./utils";

const size: ISize = {
  kb: (n: number) => n * 1024,
  kilobytes: (n: number) => n * 1024,

  mb: (n: number) => n * size.kb(1024),
  megabytes: (n: number) => n * size.kb(1024),
  
  gb: (n: number) => n * size.mb(1024),
  gigabytes: (n: number) => n * size.mb(1024),

  tb: (n: number) => n * size.gb(1024),
  terabytes: (n: number) => n * size.gb(1024),

  pb: (n: number) => n * size.tb(1024),
  petabytes: (n: number) => n * size.tb(1024),

  b: (n: number) => n,
  bytes: (n: number) => n
}

size.parse = parse.bind(size);

export default size;
