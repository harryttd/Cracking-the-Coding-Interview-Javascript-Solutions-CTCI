'use strict';

export function BSTsequences(tree) {
  if (!tree) return [];

  if (!tree.left && !tree.right) return [[tree.value]];

  const bstResult = [],
        left = BSTsequences(tree.left),
        right = BSTsequences(tree.right);

  if (left.length && right.length) {
    for (const leftSequence of left) {
      for (const rightSequence of right) {
        const weaved = weaveArrayPerms(leftSequence, rightSequence);
        for (const sequence of weaved) {
          bstResult.push([tree.value, ...sequence]);
        }
      }
    }
  } else {
    const remaining = [...left, ...right];
    for (const sequence of remaining) {
      bstResult.push([tree.value, ...sequence]);
    }
  }

  return bstResult;
}

function weaveArrayPerms(leftArray, rightArray, prefix = [], result = []) {
  if (leftArray.length && rightArray.length) {
    const p1 = leftArray.shift();
    prefix.push(p1);
    weaveArrayPerms(leftArray, rightArray, prefix, result);
    leftArray.unshift(p1);
    prefix.pop();

    const p2 = rightArray.shift();
    prefix.push(p2);
    weaveArrayPerms(leftArray, rightArray, prefix, result);
    rightArray.unshift(p2);
    prefix.pop();
  }
  else {
    result.push([...prefix, ...leftArray, ...rightArray]);
  }

  return result;
}
