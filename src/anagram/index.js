function anagram(word1, word2) {
  const charMap1 = buildCharMap(word1);
  const charMap2 = buildCharMap(word2);
  return areCharMapsEqual(charMap1, charMap2);
}

function buildCharMap(word) {
  const map = {};
  [...word].map((letter) => {
    map[letter] = map[letter] ? map[letter] + 1 : 1;
  });
  return map;
}

function areCharMapsEqual(charMap1, charMap2) {
  for (letter in charMap1) {
    if (charMap2[letter] !== charMap1[letter]) {
      return false;
    } else {
      delete charMap2[letter];
    }
  }

  console.log('charMap2', charMap2);

  if (charMap2 && Object.keys(charMap2).length) {
    return false;
  }

  return true;
}

anagram('yooo', 'oooy');
module.exports = anagram;
