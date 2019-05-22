const Trimmer = require('../src/app');

const trimmer = new Trimmer();
const punctuation = '?>!!"';

describe('trimmer.shouldCheck()', () => {
  it('returns false when no non-alphanumeric character is present', () => {
    expect(trimmer.shouldCheck()).toBe(false);
    expect(trimmer.shouldCheck('stringWithoutPunctuation')).toBe(false);
  })

  it('returns true if any non-alphanumeric character is present', () => {
    expect(trimmer.shouldCheck('hello!!!')).toBe(true);
    expect(trimmer.shouldCheck(punctuation + 'hello')).toBe(true);
    expect(trimmer.shouldCheck('hello' + punctuation)).toBe(true);
  })
})

describe('trimmer.leading()', () => {
  it('returns null when no leading punctuation', () => {
    const result = trimmer.leading('hello');
    expect(result).toBeNull();
  });

  it('else returns leading punctuation', () => {
    const result = trimmer.leading(punctuation + 'hello');
    expect(result).toBe(punctuation);
  })
})

describe('trimmer.trailing()', () => {
  it('returns null when no trailing punctuation', () => {
    const result = trimmer.trailing('hello');
    expect(result).toBeNull();
  });

  it('else returns leading punctuation', () => {
    const result = trimmer.trailing('hello' + punctuation);
    expect(result).toBe(punctuation);
  })
})

describe('trimmer.strip()', () => {
  it('returns string with no punctuation at word boundaries', () => {
    expect(trimmer.strip(punctuation + 'hello')).toBe('hello');
    expect(trimmer.strip('hello' + punctuation)).toBe('hello');
  })

  it('preserves punctuation within a word', () => {
    expect(trimmer.strip('hello' + punctuation + 'world')).toBe('hello' + punctuation + 'world');
  })
})
