import { ITime } from "./interfaces";
import { parse } from "./utils";

const time: ITime = {
  seconds: (n: number) => n * 1000,
  minutes: (n: number) => n * time.seconds(60),
  hours: (n: number) => n * time.minutes(60),
  days: (n: number) => n * time.hours(24),
  weeks: (n: number) => n * time.days(7),
  milliseconds: (n: number) => n,
};

time.s = time.secs = time.seconds;
time.m = time.mins = time.minutes;
time.h = time.hs = time.hours;
time.d = time.days;
time.w = time.weeks;
time.ms = time.mills = time.milliseconds;


time.parse = parse.bind(time);

export default time;