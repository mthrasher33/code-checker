const anagram = require('./index.js');

describe('anagram function', () => {
  it('should exist', () => {
    expect(typeof anagram).toEqual('function');
  });

  test('"apple banana" is an anagram of "banana apple"', () => {
    expect(anagram('apple banana', 'banana apple')).toBeTruthy();
  });

  test('"night" is an anagram of "thing"', () => {
    expect(anagram('thing', 'night')).toBeTruthy();
  });

  test('"hot dog" is not an anagram of "god dog"', () => {
    expect(anagram('hot dog', 'god dog')).toBeFalsy();
  });
});
