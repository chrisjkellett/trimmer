const Trimmer = require('../src/app');
const trimmer = new Trimmer();

describe('trimmer.leading()', () => {
  it('returns null when no leading punctuation', () => {
    expect(trimmer.leading('hello')).toBeNull();
  });

  it('else returns leading punctuation', () => {
    expect(trimmer.leading('!!hello??')).toBe('!!');
  })
})

describe('trimmer.trailing()', () => {
  it('returns null when no trailing punctuation', () => {
    expect(trimmer.trailing('hello')).toBeNull();
  });

  it('else returns leading punctuation', () => {
    expect(trimmer.trailing('!!hello??')).toBe('??');
  })
})

describe('trimmer.strip()', () => {
  it('returns string with no punctuation at word boundaries', () => {
    expect(trimmer.strip('!!hello??')).toBe('hello');
  })

  it('preserves punctuation within a word', () => {
    expect(trimmer.strip('!!hel-lo??')).toBe('hel-lo');
  })
})
