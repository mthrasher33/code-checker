const palindrome = require('./index.js');

describe('palindrome function', () => {
  test('exists', () => {
    expect(typeof palindrome).toEqual('function');
  });

  test('"olleh" as an anagram of "hello"', () => {
    expect(palindrome('hello', 'olleh')).toBeTruthy();
  });

  test('"Yo yo" is not an anagram of "Hey hey"', () => {
    expect(palindrome('Yo yo', 'Hey hey')).toBeFalsy();
  });
});
