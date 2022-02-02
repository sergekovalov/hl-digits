# hl-digits (Human-like digits)

## Installation

```sh
  npm i hl-digits
```

OR

```sh
  yarn add hl-digits
```

## Usage

### time

```js
  import { time } from 'hl-digits';
  
  ...

  console.log(time.seconds(13)); // Equals to 13 000 ms
  console.log(time.secs(13)); // Equals to 13 000 ms
  console.log(time.s(13)); // Equals to 13 000 ms

  ...

  console.log(time.parse('13s')); // Equals to 13 000 ms
```

All functions list:
- milliseconds(n: number) => number

### size

```js
  import { size } from 'hl-digits';
  
  ...

  console.log(size.mb(13)); // Equals to 13631488 ms
  console.log(size.megabytes(13)); // Equals to 13631488 bytes
```

## License

MIT