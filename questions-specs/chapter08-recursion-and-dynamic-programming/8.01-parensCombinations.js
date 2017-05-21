'use strict';

function parensCombos(open, close = open, str = '', result = []) {
  if (!open && !close) return result.push(str); // All opening and closing parens have been added

  if (open > close) return; // Invalid: There are more closing parens than open ones

  if (open > 0) parensCombos(open - 1, close, str + '(', result);
  if (close > 0) parensCombos(open, close - 1, str + ')', result);

  return result;
}

console.log(parensCombos(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
console.log(parensCombos(4));
