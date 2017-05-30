'use strict';

function towersOfHanoi(numDisks) {
  const stacks = [[], [], []];
  for (let i = 1; i <= numDisks; i++) {
    stacks[0].push(i);
  }
  solveHanoi(numDisks, ...stacks);
  return stacks;
}

function solveHanoi(numDisks, startStack, buffer, endStack) {
  if (numDisks <= 0) return;

  // Move top n-1 disks from 'start' to 'buffer' by using 'end' as the buffer.
  solveHanoi(numDisks - 1, startStack, endStack, buffer);

  // Move top from 'start' to 'end'.
  endStack.unshift(startStack.shift());

  // Move top n-1 disks from 'buffer' to 'end' by using 'start' as the buffer.
  solveHanoi(numDisks - 1, buffer, startStack, endStack);
}
console.log(towersOfHanoi(10));
