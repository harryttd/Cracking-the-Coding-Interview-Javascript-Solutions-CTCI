'use strict';

function parensCombos(open, close, str, set = new Set()) {
  if (!open && !close) set.add(str); // All opening and closing have been added

  if (open > close) return set;// More closing parentheses than open ones

  if (open > 0) parensCombos(open - 1, close, str + "(", set);
  if (close > 0) parensCombos(open, close - 1, str + ")", set);

  return [...set];
}
console.log(parensCombos(3, 3, ''));

function parensCombinations(count) {
  return go(count, count);
}

function go(left, right, index, count, set = new Set()) {
  const arr = [];

  if (right === count) {
    set.add(arr.join``);
    // return set;
  }
  else if (left > right) {
    arr[index] = ')';
    go(left, right - 1, index + 1, count, set);
  }
  else if (right > left) {
    arr[index] = '(';
    go(left - 1, right, index + 1, count, set);
  }
  return set;
}

console.log(parensCombinations(3));
