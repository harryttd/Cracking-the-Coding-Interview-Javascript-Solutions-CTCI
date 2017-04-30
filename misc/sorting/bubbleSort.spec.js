'use strict';

import { expect } from 'chai';
import { bubbleSort, swap, inOrder } from './bubbleSort';

const numericalSort = (a, b) => a - b;

const generateArray = (size, lower, upper) => {
  const randomArray = [];
  while (size--) {
    const randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
};

describe('MISC - Bubble Sort', function(){

  it('sorts an empty array', function(){
    expect(bubbleSort([])).to.eql([]);
  });

  it('sorts an array of one element', function(){
    expect(bubbleSort([7]) ).to.eql( [7] );
  });

  it('sorts an array of many elements', function(){
    expect(bubbleSort([5, 2, 7, 9, 3, 5, 4, 1, 0]) ).to.eql([0, 1, 2, 3, 4, 5, 5, 7, 9]);
  });

  for (let i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function(){
      const arr = generateArray(i, 0, 100);
      const sorted = arr.slice(0).sort(numericalSort);
      expect(bubbleSort(arr) ).to.eql( sorted );
    });
  }

});
