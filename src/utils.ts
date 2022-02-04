import { PARSE_OBJECT_ERROR } from './constants';

export const parse = (provider: any, str: string) => {
  const keys = Object.keys(provider).filter((key) => key !== 'parse');

  for (let key of keys) {
    const regex = new RegExp(`(\\d|\\s)${key}$`);

    if (str.match(regex)) {
      return provider[key](
        parseFloat(str.replace(new RegExp(`\\s?${key}$`), '')),
      );
    }
  }

  throw { message: PARSE_OBJECT_ERROR };
};
