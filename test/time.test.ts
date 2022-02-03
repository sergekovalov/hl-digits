import time from '../src/time';
import { expect } from 'chai';

describe('Testing time', () => {
  it('tests returns success', () => {
    expect(time.milliseconds(1000)).to.be.eq(time.seconds(1));
    expect(time.seconds(60)).to.be.eq(time.minutes(1));
    expect(time.minutes(60)).to.be.eq(time.hours(1));
    expect(time.hours(24)).to.be.eq(time.days(1));
    expect(time.days(7)).to.be.eq(time.weeks(1));
  });

  it('parses times', () => {
    expect(time.parse('13ms')).to.be.eq(time.ms(13));
    expect(time.parse('13s')).to.be.eq(time.s(13));
    expect(time.parse('13m')).to.be.eq(time.m(13));
    expect(time.parse('13h')).to.be.eq(time.h(13));
    expect(time.parse('13w')).to.be.eq(time.w(13));
  });
});
