import { DAYS_IN_WEEK, HOURS_IN_DAY, MILLS_IN_SECOND, SECONDS_IN_MINUTES } from './constants';
import { ITime } from './interfaces';
import { parse } from './utils';

const Time: ITime = {
  seconds: (n: number) => n * MILLS_IN_SECOND,
  minutes: (n: number) => n * Time.seconds(SECONDS_IN_MINUTES),
  hours: (n: number) => n * Time.minutes(SECONDS_IN_MINUTES),
  days: (n: number) => n * Time.hours(HOURS_IN_DAY),
  weeks: (n: number) => n * Time.days(DAYS_IN_WEEK),
  milliseconds: (n: number) => n,
};

Time.s = Time.secs = Time.seconds;
Time.m = Time.mins = Time.minutes;
Time.h = Time.hs = Time.hours;
Time.d = Time.days;
Time.w = Time.weeks;
Time.ms = Time.mills = Time.milliseconds;

Time.parse = (str: string) => parse(Time, str);

export default Time;
