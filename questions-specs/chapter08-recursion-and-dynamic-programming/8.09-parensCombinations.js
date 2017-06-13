'use strict';

function parensCombos(openCount, closeCount = openCount, str = '', result = []) {
  if (!openCount && !closeCount) return result.push(str); // All openCounting and closing parens have been added

  if (openCount > closeCount) return; // Invalid: There would be more closing parens than open ones

  if (openCount > 0) parensCombos(openCount - 1, closeCount, str + '(', result);
  if (closeCount > 0) parensCombos(openCount, closeCount - 1, str + ')', result);

  return result;
}

console.log(parensCombos(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
console.log(parensCombos(4));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function generateParens(remaining) {
  const set = new Set();

  if (!remaining) set.add('');
  else {
    const prev = generateParens(remaining - 1);
    for (const str of prev) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
          const newStr = insertInside(str, i);
          set.add(newStr);
        }
      }
      set.add('()' + str);
    }
  }

  return [...set];
}

function insertInside(str, leftIndex) {
  const left = str.slice(0, leftIndex + 1);
  const right = str.slice(leftIndex + 1);
  return left + '()' + right;
}

console.log(generateParens(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
console.log(generateParens(4));
