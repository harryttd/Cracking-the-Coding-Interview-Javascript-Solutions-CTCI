'use strict';

function weave(leftArray, rightArray, prefix = [], result = []) {
  if (!leftArray.length || !rightArray.length) {
    result.push([...prefix, ...leftArray, ...rightArray]);
    console.log(result);
    return result;
  }

  const h1 = leftArray.shift();
  prefix.push(h1);
  weave(leftArray, rightArray, prefix, result);
  leftArray.unshift(h1);
  prefix.pop();

  const h2 = rightArray.shift();
  prefix.push(h2);
  weave(leftArray, rightArray, prefix, result);
  rightArray.unshift(h2);
  prefix.pop();

  return result;
}

export function BSTsequences(tree) {
  if (!tree) return [];

  if (!tree.left && !tree.right) {
    return [[tree.value]];
  }

  const bstResult = [];
  const left = BSTsequences(tree.left);
  const right = BSTsequences(tree.right);
  // console.log("LEFT", left, tree.value);
  // console.log("RIGHT", right, tree.value);
  if (left.length && right.length) {
    for (const leftSequence of left) {
      for (const rightSequence of right) {
        const weaved = weave(leftSequence, rightSequence);
        for (const sequence of weaved) {
          // console.log(sequence);
          bstResult.push([tree.value, ...sequence]);
          // console.log(bstResult);
        }
      }
    }
  }
  // else {
    // console.log(left, right);
    // const remaining = [...left, ...right];
    // bstResult.push([[tree.value, ...remaining]]);
  // }
  // console.log("BST RESULT", bstResult);
  return bstResult;
}
