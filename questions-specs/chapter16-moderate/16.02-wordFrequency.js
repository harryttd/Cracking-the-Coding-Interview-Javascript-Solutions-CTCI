'use strict';

const wordFrequencyRegex = (text, word) => text.match(new RegExp(word.trim(), 'gi')).length;

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function wordFrequency1(text, word) {
  if (!text || !word) return -1;
  word = word.trim().toLowerCase();
  return word ? text.split(/[\s.,!?]/g).reduce((acc, w) => w.trim().toLowerCase() === word ? acc + 1 : acc, 0) : 0;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

const text = 'hello world, bye bye';

const hashMap = (text => {
  const wordMap = new Map();
  text = text.split(/[\s.,!?]/g);

  for (let word of text) {
    word = word.trim();
    if (word) wordMap.set(word, wordMap.get(word) + 1 || 1);
  }

  return wordMap;
})(text);

function wordFrequency2(map, word) {
  if (!map || !word) return -1;
  word = word.trim().toLowerCase();
  return map.get(word) || 0;
}
