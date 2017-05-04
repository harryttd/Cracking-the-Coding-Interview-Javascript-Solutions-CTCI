'use strict';

export function BSTsequences(tree) {
  if (!tree) return [];
  if (!tree.left && !tree.right) return [[tree.value]];

  // In-Order Traversal to create sequence lists
  const leftSequence = BSTsequences(tree.left),
        rightSequence = BSTsequences(tree.right);

  const permsResult = [];

  if (leftSequence[0] && rightSequence[0]) {
    for (const leftSeq of leftSequence) {
      for (const rightSeq of rightSequence) {
        const weaved = weaveArrayPerms(leftSeq, rightSeq);
        for (const perm of weaved) {
          permsResult.push([tree.value, ...perm]);
        }
      }
    }
  }
  else { // Any remaining sequence
    for (const perm of [...leftSequence, ...rightSequence]) {
      permsResult.push([tree.value, ...perm]);
    }
  }

  return permsResult;
}

function weaveArrayPerms(leftArray, rightArray, prefix = [], sequences = []) {
  if (leftArray.length && rightArray.length) {
    // Shift leftArray head to prefix. Weave, and put back to leftArray.
    prefix.push(leftArray.shift());
    weaveArrayPerms(leftArray, rightArray, prefix, sequences);
    leftArray.unshift(prefix.pop());

    // Shift rightArray head to prefix. Weave, and put back to rightArray.
    prefix.push(rightArray.shift());
    weaveArrayPerms(leftArray, rightArray, prefix, sequences);
    rightArray.unshift(prefix.pop());
  }
  else {
    sequences.push([...prefix, ...leftArray, ...rightArray]);
  }

  return sequences;
}
