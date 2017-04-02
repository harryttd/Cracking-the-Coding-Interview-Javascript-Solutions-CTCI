'use strict';
import { arrayToLinkedList, createNode } from './helpers';

// FIRST SOLUTION
export function sumLists(list1, list2) {
  const list1Arr = [], list2Arr = [];

  while (list1 || list2) {
    if (list1) {
      list1Arr.unshift(list1.value);
      list1 = list1.next;
    }
    if (list2) {
      list2Arr.unshift(list2.value);
      list2 = list2.next;
    }
  }

  const convertToNum = arr => +arr.join``;

  const total = convertToNum(list1Arr) + convertToNum(list2Arr);
  const numberArr = [...total.toString()].reduceRight((acc, nextValue) => acc.concat(+nextValue), []);

  return arrayToLinkedList(numberArr);
}

// RECURSIVE SOLUTION
export function sumLists2(list1, list2, carry = 0) {
  if (!list1 && !list2 && !carry) return null;

  const newNode = createNode();
  let value = carry;

  if (list1) value += list1.value;
  if (list2) value += list2.value;
  newNode.value = value % 10;

  if (list1 || list2) {
    const nextNode = sumLists2(list1 ? list1.next : null, list2 ? list2.next : null, value >= 10 ? 1 : 0);
    newNode.next = nextNode;
  }
  return newNode;
}
