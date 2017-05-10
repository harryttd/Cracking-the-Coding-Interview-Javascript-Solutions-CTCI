'use strict';

const isEmpty = (stack) => !stack.length;
const peek = (stack) => stack[stack.length - 1];

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// MY SOLUTION

const sort = (stack, value) => {
  let index = 0;
  while (value < stack[index]) index++;
  stack.splice(index, 0, value);
};

export const sortStack1 = (stack) => {
  if (!Array.isArray(stack)) throw Error('Invalid input');

  const newStack = [stack.pop()];
  while (!isEmpty(stack)) sort(newStack, stack.pop());
  return newStack;
};

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// BOOK SOLUTION
// MOVES NUMBERS BACK AND FORTH BETWEEN STACK AND TEMP TO SORT

export const sortStack2 = (stack) => {
  if (!Array.isArray(stack)) throw Error('Invalid input');

  const temp = [];
  while (!isEmpty(stack)) {
    const popped = stack.pop();
    while (!isEmpty(temp) && peek(temp) > popped) {
      stack.push(temp.pop());
    }
    temp.push(popped);
  }

  while (!isEmpty(temp)) stack.push(temp.pop());

  return stack;
};
