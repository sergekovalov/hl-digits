import { ByteUnit } from '../src';
import { expect } from 'chai';

describe('Testing byte-unit', () => {
  it('tests basic sizes', () => {
    expect(ByteUnit.kb(1)).to.be.eq(1024);
    expect(ByteUnit.mb(1)).to.be.eq(1_048_576);
  });

  
  it('tests kilobytes -> bytes', () => {
    expect(ByteUnit.bytes(1024)).to.be.eq(ByteUnit.kilobytes(1));
  });

  it('tests megabytes -> kilobytes', () => {
    expect(ByteUnit.kilobytes(1024)).to.be.eq(ByteUnit.megabytes(1));
  });

  it('tests gigabytes -> megabytes', () => {
    expect(ByteUnit.megabytes(1024)).to.be.eq(ByteUnit.gigabytes(1));
  });

  it('tests terabytes -> gigabytes', () => {
    expect(ByteUnit.gigabytes(1024)).to.be.eq(ByteUnit.terabytes(1));
  });

  it('tests petabytes -> terabytes', () => {
    expect(ByteUnit.terabytes(1024)).to.be.eq(ByteUnit.petabytes(1));
  });
  
  it('parses sizes', () => {
    expect(ByteUnit.parse('1b')).to.be.eq(ByteUnit.b(1));
    expect(ByteUnit.parse('1kb')).to.be.eq(ByteUnit.kb(1));
    expect(ByteUnit.parse('1mb')).to.be.eq(ByteUnit.mb(1));
    expect(ByteUnit.parse('1gb')).to.be.eq(ByteUnit.gb(1));
    expect(ByteUnit.parse('1tb')).to.be.eq(ByteUnit.tb(1));
    expect(ByteUnit.parse('1pb')).to.be.eq(ByteUnit.pb(1));
  });

  it('converts to string decimal', () => {
    expect(ByteUnit.toString(`${281312}b`, 'kb', 'decimal')).to.be.eq("281.3kb");
  })
  
  it('converts to string binary', () => {
    expect(ByteUnit.toString(`${281312}b`, 'kb')).to.be.eq("274.7kb");
  })

  it('converts to string auto', () => {
    expect(ByteUnit.toString(`${281312}b`, 'auto')).to.be.eq("274.7kb");
    expect(ByteUnit.toString(`${5781312}b`, 'auto')).to.be.eq("5.5mb");
  });

  it('tests zero byte conversion', () => {
    expect(ByteUnit.toString("0b")).to.be.eq("0.0b");
  });
});
