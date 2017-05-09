'use strict';

export function BSTsequences(tree) {
  if (!tree) return [];
  if (!tree.left && !tree.right) return [[tree.value]];

  // In-Order Traversal to create sequence lists
  const leftSequence = BSTsequences(tree.left),
        rightSequence = BSTsequences(tree.right);

  return weaveArrayPerms(tree.value, leftSequence, rightSequence);
}

function weaveArrayPerms(nodeValue, leftSequence, rightSequence) {
  const permsResult = [];

  if (leftSequence[0] && rightSequence[0]) {
    for (const leftSeq of leftSequence) {
      for (const rightSeq of rightSequence) {
        const weaved = weave(leftSeq, rightSeq);
        for (const perm of weaved) {
          permsResult.push([nodeValue, ...perm]);
        }
      }
    }
  }
  else { // Any remaining sequence
    for (const perm of [...leftSequence, ...rightSequence]) {
      permsResult.push([nodeValue, ...perm]);
    }
  }

  return permsResult;
}

function weave(leftSeq, rightSeq, prefix = [], sequences = []) {
  if (leftSeq.length && rightSeq.length) {
    // Shift leftSeq head to prefix. Weave, and put back to leftSeq.
    prefix.push(leftSeq.shift());
    weave(leftSeq, rightSeq, prefix, sequences);
    leftSeq.unshift(prefix.pop());

    // Shift rightSeq head to prefix. Weave, and put back to rightSeq.
    prefix.push(rightSeq.shift());
    weave(leftSeq, rightSeq, prefix, sequences);
    rightSeq.unshift(prefix.pop());
  }
  else {
    sequences.push([...prefix, ...leftSeq, ...rightSeq]);
  }

  return sequences;
}
