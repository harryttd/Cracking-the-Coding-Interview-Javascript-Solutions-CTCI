'use strict';

import { createNode, getListLength } from './helpers';

// RECURSIVE SOLUTION
export function isPalindromeRecursive(list) {
  const palindrome = recursiveIsPalindrome(list, getListLength(list));
  return palindrome.result;
}

function recursiveIsPalindrome(list, length) {
  // If length is even
  if (!list || length === 0) return {node: list, result: true};
  // If length is odd
  else if (length === 1) return {node: list.next, result: true};

  const compareNodes = recursiveIsPalindrome(list.next, length - 2);
  if (!compareNodes.result || !compareNodes.node) return compareNodes;

  compareNodes.result = list.value === compareNodes.node.value;
  compareNodes.node = compareNodes.node.next;

  return compareNodes;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME -- ONLY KEEPS TRACK OF HALF THE LIST
// USES A STACK
export function linkedListPalindrome1(list) {
  let slowPointer = list, fastPointer = list;
  const stack = [];

  while (fastPointer && fastPointer.next) {
    stack.push(slowPointer.value);
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // If list length is odd, move slow pointer past the middle node.
  if (fastPointer) slowPointer = slowPointer.next;

  while (stack.length) {
    if (stack.pop() !== slowPointer.value) return false;
    slowPointer = slowPointer.next;
  }

  return true;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME -- O(N) SPACE
export function linkedListPalindrome2(list) {
  let head = null, node = list, lengthCounter = 0;

  // Create reversed list and keep track of its length
  while (node) {
    const newNode = createNode(node.value, head);
    head = newNode;
    node = node.next;
    lengthCounter++;
  }

  // Only need to check to half of length
  const halfLength = lengthCounter / 2;
  node = list;

  while (lengthCounter-- > halfLength) {
    if (node.value !== head.value) return false;
    node = node.next;
    head = head.next;
  }

  return true;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// USES AN ARRAY TO KEEP TRACK OF THE VALUES
// O(N) TIME -- O(N) SPACE
export function linkedListPalindrome3(list) {
  const valuesArr = [];
  let head = list;

  while (head) {
    valuesArr.unshift(head.value);
    head = head.next;
  }

  const valuesArrHalfLength = valuesArr.length / 2;
  head = list;

  for (let i = 0; i < valuesArrHalfLength; head = head.next, i++) {
    if (head.value !== valuesArr[i]) return false;
  }

  return true;
}
