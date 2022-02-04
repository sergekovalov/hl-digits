import { DAYS_IN_WEEK, HOURS_IN_DAY, MILLS_IN_SECOND, SECONDS_IN_MINUTES } from './constants';
import { ITime } from './interfaces';
import { parse } from './utils';

const time: ITime = {
  seconds: (n: number) => n * MILLS_IN_SECOND,
  minutes: (n: number) => n * time.seconds(SECONDS_IN_MINUTES),
  hours: (n: number) => n * time.minutes(SECONDS_IN_MINUTES),
  days: (n: number) => n * time.hours(HOURS_IN_DAY),
  weeks: (n: number) => n * time.days(DAYS_IN_WEEK),
  milliseconds: (n: number) => n,
};

time.s = time.secs = time.seconds;
time.m = time.mins = time.minutes;
time.h = time.hs = time.hours;
time.d = time.days;
time.w = time.weeks;
time.ms = time.mills = time.milliseconds;

time.parse = (str: string) => parse(time, str);

export default time;
