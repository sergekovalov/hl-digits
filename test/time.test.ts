import { Time } from '../src';
import { expect } from 'chai';

describe('Testing time', () => {
  it('tests seconds -> millieconds', () => {
    expect(Time.milliseconds(1000)).to.be.eq(Time.seconds(1));
  });
  
  it('tests minutes -> seconds', () => {
    expect(Time.seconds(60)).to.be.eq(Time.minutes(1));
  });

  it('tests hours -> minutes', () => {
    expect(Time.minutes(60)).to.be.eq(Time.hours(1));
  });

  it('tests days -> hours', () => {
    expect(Time.hours(24)).to.be.eq(Time.days(1));
  });

  it('tests weeks -> days', () => {
    expect(Time.days(7)).to.be.eq(Time.weeks(1));
  });

  it('parses times', () => {
    expect(Time.parse('1ms')).to.be.eq(Time.ms(1));
    expect(Time.parse('1s')).to.be.eq(Time.s(1));
    expect(Time.parse('1m')).to.be.eq(Time.m(1));
    expect(Time.parse('1h')).to.be.eq(Time.h(1));
    expect(Time.parse('1w')).to.be.eq(Time.w(1));
  });
});
