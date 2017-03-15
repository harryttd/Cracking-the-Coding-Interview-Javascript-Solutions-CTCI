'use strict';
import { arrayToLinkedList } from './helpers';

// MY FIRST SOLUTION
const convertToNum = arr => +arr.join``;

export function sumLists(num1, num2) {
  const num1Arr = [], num2Arr = [];

  while (num1 || num2) {
    if (num1) {
      num1Arr.unshift(num1.value);
      num1 = num1.next;
    }
    if (num2) {
      num2Arr.unshift(num2.value);
      num2 = num2.next;
    }
  }

  const total = convertToNum(num1Arr) + convertToNum(num2Arr);
  const numberArr = total.toString().split``.reduceRight((acc, nextValue) => acc.concat(+nextValue), []);

  return arrayToLinkedList(numberArr);
}
