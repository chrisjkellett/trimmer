const Trimmer = require('../src/app');

const trim = new Trimmer();
const punctuation = '?>!!"';

describe('trim.shouldCheck()', () => {
  it('returns false when no non-alphanumeric character is present', () => {
    expect(trim.shouldCheck()).toBe(false);
    expect(trim.shouldCheck('stringWithoutPunctuation')).toBe(false);
  })

  it('returns true if any non-alphanumeric character is present', () => {
    expect(trim.shouldCheck('hello!!!')).toBe(true);
    expect(trim.shouldCheck(punctuation + 'hello')).toBe(true);
    expect(trim.shouldCheck('hello' + punctuation)).toBe(true);
  })
})

describe('trim.leading()', () => {
  it('returns null when no leading punctuation', () => {
    const result = trim.leading('hello');
    expect(result).toBeNull();
  });

  it('else returns leading punctuation', () => {
    const result = trim.leading(punctuation + 'hello');
    expect(result).toBe(punctuation);
  })
})

describe('trim.trailing()', () => {
  it('returns null when no trailing punctuation', () => {
    const result = trim.trailing('hello');
    expect(result).toBeNull();
  });

  it('else returns leading punctuation', () => {
    const result = trim.trailing('hello' + punctuation);
    expect(result).toBe(punctuation);
  })
})
