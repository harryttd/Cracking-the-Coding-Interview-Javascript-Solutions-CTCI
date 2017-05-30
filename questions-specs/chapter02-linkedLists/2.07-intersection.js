'use strict';
import { getListLength } from './helpers';

// (O(A + B)) O(N) TIME -- O(1) SPACE
export function intersection1(list1, list2) {
  if (!list1 || !list2) return;

  const length1 = getListLength(list1),
        length2 = getListLength(list2);

  let longerList = length1 > length2 ? list1 : list2,
      shorterList = longerList === list1 ? list2 : list1,
      traverseCounter = Math.abs(length1 - length2);

  while (traverseCounter-- > 0) longerList = longerList.next;

  while (shorterList) {
    if (shorterList === longerList) return shorterList;
    shorterList = shorterList.next;
    longerList = longerList.next;
  }
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// (O(A + B)) O(N) TIME -- O(N) SPACE
export function intersection2(list1, list2) {
  if (!list1 || !list2) return;

  let head1 = list1, head2 = list2;
  const set = new Set();

  while (head1) {
    set.add(head1);
    head1 = head1.next;
  }

  while (head2) {
    if (set.has(head2)) return head2;
    head2 = head2.next;
  }

}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(AB) TIME --- O(1) SPACE
export function intersection3(list1, list2) {
  if (!list1 || !list2) return;

  let head1 = list1, head2 = list2;

  while (head1) {
    while (head2) {
      if (head1 === head2) return head1;
      head2 = head2.next;
    }
    head2 = list2;
    head1 = head1.next;
  }
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// BOOKS SOLUTION
// (O(A + B)) O(N) TIME -- O(1) SPACE
function getTailAndSize(list) {
  let size = 1;

  while (list) {
    size++;
    list = list.next;
  }

  return {tail: list, size};
}

function getKthNode(list, k) {
  while (list && k--) list = list.next;
  return list;
}

export function BookSolutionIntersection(list1, list2) {
  if (!list1 || !list2) return;

  const head1 = getTailAndSize(list1),
        head2 = getTailAndSize(list2);

  if (head1.tail !== head2.tail) return;

  let longerList = head1.size > head2.size ? list1 : list2,
      shorterList = longerList === list1 ? list2 : list1;

  longerList = getKthNode(longerList, Math.abs(head1.size - head2.size));

  while (shorterList) {
    if (shorterList === longerList) return shorterList;
    shorterList = shorterList.next;
    longerList = longerList.next;
  }
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// IF BOTH LISTS ARE THE SAME LENGTH
function intersection(list1, list2) {
  let head1 = list1, head2 = list2;

  while (head1) {
    if (head1 === head2) return head1;
    head1 = head1.next;
    head2 = head2.next;
  }
}
