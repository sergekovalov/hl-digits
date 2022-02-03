import size from '../src/size';
import { expect } from 'chai';

describe('Testing size', () => {
  it('tests kilobytes -> bytes', () => {
    expect(size.bytes(1024)).to.be.eq(size.kilobytes(1));
  });

  it('tests megabytes -> kilobytes', () => {
    expect(size.kilobytes(1024)).to.be.eq(size.megabytes(1));
  });

  it('tests gigabytes -> megabytes', () => {
    expect(size.megabytes(1024)).to.be.eq(size.gigabytes(1));
  });

  it('tests terabytes -> gigabytes', () => {
    expect(size.gigabytes(1024)).to.be.eq(size.terabytes(1));
  });

  it('tests petabytes -> terabytes', () => {
    expect(size.terabytes(1024)).to.be.eq(size.petabytes(1));
  });
  
  it('parses sizes', () => {
    expect(size.parse('13b')).to.be.eq(size.b(13));
    expect(size.parse('13kb')).to.be.eq(size.kb(13));
    expect(size.parse('13mb')).to.be.eq(size.mb(13));
    expect(size.parse('13gb')).to.be.eq(size.gb(13));
    expect(size.parse('13tb')).to.be.eq(size.tb(13));
    expect(size.parse('13pb')).to.be.eq(size.pb(13));
  });
});
