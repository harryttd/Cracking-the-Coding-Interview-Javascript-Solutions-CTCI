'use strict';

function mergeLinkedLists1(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  if (head1.value < head2.value) {
    head1.next = mergeLinkedLists1(head1.next, head2);
    return head1;
  }
  else {
    head2.next = mergeLinkedLists1(head1, head2.next);
    return head2;
  }
}

const ll1 = {value: 1, next: {value: 3, next: {value: 5, next: {value: 6, next: null}}}};
const ll2 = {value: 2, next: {value: 4, next: {value: 7, next: null}}};
console.log(mergeLinkedLists1(ll1, ll2));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function mergeLinkedLists2(head1, head2) {
  let merged = {value: null, next: null};
  const mergedResult = merged;

  while (head1 || head2) {
    if (head1 && head2) {
      if (head1.value <= head2.value) {
        merged.next = head1;
        head1 = head1.next;
      }
      else {
        merged.next = head2;
        head2 = head2.next;
      }
    }
    else {
      if (head1) merged.next = head1;
      else if (head2) merged.next = head2;
      break;
    }

    merged = merged.next;
  }

  return mergedResult.next;
}

const llA = {value: 1, next: {value: 3, next: {value: 5, next: {value: 6, next: null}}}};
const llB = {value: 2, next: {value: 4, next: {value: 7, next: null}}};
console.log(mergeLinkedLists2(llA, llB));
