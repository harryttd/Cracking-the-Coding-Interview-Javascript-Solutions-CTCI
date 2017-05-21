'use strict';

// O(N log N) TIME --- O(N) SPACE

export function mergeSort(array) {
  if (array.length < 2) return array;
  const splits = split(array), [left, right] = splits;
  return merge(mergeSort(left), mergeSort(right));
}

export function split(array) {
  const center = array.length / 2;
  return [array.slice(0, center), array.slice(center)];
}

export function merge(left, right) {
  const merged = [], leftLength = left.length, rightLength = right.length;
  let leftIndex = 0, rightIndex = 0;

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) merged.push(left[leftIndex++]);
    else merged.push(right[rightIndex++]);
  }

  merged.push(...left.slice(leftIndex), ...right.slice(rightIndex));

  return merged;
}
