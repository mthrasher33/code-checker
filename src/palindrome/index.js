function palindrome(string1, string2) {
  const reverseString1 = [...string1].reverse().join('');
  console.log(reverseString1);
  return reverseString1 === string2;
}

module.exports = palindrome;
