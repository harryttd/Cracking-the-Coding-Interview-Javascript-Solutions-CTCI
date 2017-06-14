'use strict';

import { bubbleSort } from './bubbleSort';
import { mergeSort } from './mergeSort';
import { countingSort } from './countingSort';

console.log('Sorting Algorithms Performance Test\n');

for (let i = 9; i <= 12; i++) {
  const numItems = Math.pow(2, i);
  const nativeTestArray = [];

  for (let j = 0; j < numItems; j++) {
    let rand = Math.floor(Math.random() * numItems);
    nativeTestArray.push(rand);
  }

  const bTestArray = nativeTestArray.slice(0);
  const mTestArray = nativeTestArray.slice(0);

  console.time(numItems + ' items - native');
  nativeTestArray.sort((a, b) =>  a - b);
  console.timeEnd(numItems + ' items - native');

  console.time(numItems + ' items - bubble');
  bubbleSort(bTestArray);
  console.timeEnd(numItems + ' items - bubble');

  console.time(numItems + ' items - merge');
  mergeSort(mTestArray);
  console.timeEnd(numItems + ' items - merge');

  console.time(numItems + ' items - counting');
  countingSort(mTestArray);
  console.timeEnd(numItems + ' items - counting');

  console.log('---------------------------');
}
