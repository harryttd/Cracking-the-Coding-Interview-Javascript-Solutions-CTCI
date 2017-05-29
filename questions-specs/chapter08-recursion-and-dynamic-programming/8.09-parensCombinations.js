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
