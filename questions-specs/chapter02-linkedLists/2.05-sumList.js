'use strict';
import { arrayToLinkedList, createNode, getListLength } from './helpers';

// FIRST SOLUTION
export function sumListsIterative(list1, list2) {
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

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// RECURSIVE SOLUTION (Digits stored in reverse order)
export function sumListsRecursive(list1, list2, carry = 0) {
  if (!list1 && !list2 && !carry) return null;

  const resultNode = createNode();
  let value = carry;

  if (list1) value += list1.value;
  if (list2) value += list2.value;
  resultNode.value = value % 10;

  if (list1 || list2) {
    const nextNode = sumListsRecursive(
      list1 ? list1.next : null,
      list2 ? list2.next : null,
      value >= 10 ? 1 : 0
    );
    resultNode.next = nextNode;
  }

  return resultNode;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// THIS SOLUTION IS FOR LISTS THAT STORE DIGITS IN REGULAR RIGHT TO LEFT ORDER

class PartialSum {
  constructor() {
    this.nodeSum = null;
    this.carry = 0;
  }
}

function addLists(list1, list2) {
  const len1 = getListLength(list1);
  const len2 = getListLength(list2);

  if (len1 < len2) list1 = padList(list1, len2 - len1);
  else list2 = padList(list2, len1 - len2);

  const sum = addListsHelper(list1, list2);

  if (!sum.carry) return sum.nodeSum;
  else return insertBefore(sum.nodeSum, sum.carry);
}

function addListsHelper(list1, list2) {
  if (!list1 && !list2) return new PartialSum();

  const sum = addListsHelper(list1.next, list2.next),
        value = sum.carry + list1.value + list2.value,
        fullResult = insertBefore(sum.nodeSum, value % 10);

  sum.nodeSum = fullResult;
  sum.carry = Math.floor(value / 10);
  return sum;
}

function padList(list, padding) {
  for (let i = 0; i < padding; i++) {
    list = insertBefore(list, 0);
  }
  return list;
}

function insertBefore(list, value) {
  const node = createNode(value);
  if (list) node.next = list;
  return node;
}

const list1 = {value: 6, next: {value: 1, next: {value: 7, next: {value: 8, next: null}}}};
const list2 = {value: 2, next: {value: 9, next: {value: 5, next: null}}};
// const list1 = {value: 7, next: {value: 1, next: {value: 6, next: null}}};
// const list2 = {value: 5, next: {value: 9, next: {value: 2, next: null}}};
// console.log(addLists(list1, list2));
