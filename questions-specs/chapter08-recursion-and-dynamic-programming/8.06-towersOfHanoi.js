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
  if (numDisks > 0) {
    // Move top n-1 disks from 'start' to 'buffer' by using 'end' as the buffer.
    solveHanoi(numDisks - 1, startStack, endStack, buffer);

    // Move top from 'start' to 'end'.
    endStack.unshift(startStack.shift());

    // Move top n-1 disks from 'buffer' to 'end' by using 'start' as the buffer.
    solveHanoi(numDisks - 1, buffer, startStack, endStack);
  }
}
console.log(towersOfHanoi(5));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function printTowersOfHanoi(numRings, startStack = 'start', endStack = 'last') {
  if (numRings > 0) {

    const availableSpot = ['start', 'middle', 'last']
                          .filter(stack => stack !== startStack && stack !== endStack)[0];

    // perform towerOfHanoi up to the base case, from the start to an available opening
    printTowersOfHanoi(numRings - 1, startStack, availableSpot);

    console.log(`Move ring from ${startStack} to ${endStack}`);

    // move from the available smaller tower of hanoi from here to the end
    printTowersOfHanoi(numRings - 1, availableSpot, endStack);
  }
}
printTowersOfHanoi(5);
