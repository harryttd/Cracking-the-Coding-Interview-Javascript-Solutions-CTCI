'use strict';

export function partition(list, partitionNum) {

  let smallerHead, smallerTail, largerHead, largerTail;
  smallerHead = smallerTail = largerHead = largerTail = null;

  while (list) {
    const nextNode = list.next;
    list.next = null;
    if (list.value < partitionNum) {
      if (smallerHead) {
        smallerTail = smallerTail.next = list;
      } else {
        smallerHead = smallerTail = list;
      }
    } else {
      if (largerHead) {
        largerTail = largerTail.next = list;
      } else {
        largerHead = largerTail = list;
      }
    }
    list = nextNode;
  }

  if (smallerTail) {
    smallerTail.next = largerHead;
  }
  return smallerHead || largerHead;

  // if (!smallerHead) return largerHead;
  //
  // smallerTail.next = largerHead;
  // return smallerHead;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// IF WE DON'T CARE ABOUT KEEPING ALL ELEMENTS "STABLE", ONLY ONES THAT NEED TO BE MOVED...
function unstablePartition(list, num) {
  let head = list, tail = list;

  while (list) {
    const next = list.next;
    if (list.value < num) {
      list.next = head;
      head = list;
    } else {
      tail.next = list;
      tail = list;
    }

    list = next;
  }

  tail.next = null;
  return head;

}
