'use strict';

import { expect } from 'chai';
import { mergeSort, merge, split } from './mergeSort';

describe('MISC - Merge sort', function () {

  describe('split', function () {

    it('given one array, returns two arrays', function () {
      expect(split([])).to.eql([[], []]);
    });

    it('splits array of even length', function () {
      expect(split([5, 10])).to.eql([[5], [10]]);
    });

    it('splits array of odd length', function () {
      expect(split([4, 10, 20])).to.eql([[4], [10, 20]]);
    });

  });

  describe('merge', function () {

    it('given two arrays, returns an array', function () {
      expect(merge([], [])).to.eql([]);
    });

    it('given two already sorted arrays of equal length, returns sorted result array', function () {
      expect(merge([1, 5, 10], [2, 4, 11])).to.eql([1, 2, 4, 5, 10, 11]);
      expect(merge([1, 9, 10], [2, 3, 8])).to.eql([1, 2, 3, 8, 9, 10]);
    });

    it('works for arrays of unequal length', function () {
      expect(merge([1, 5, 10, 20, 21], [2, 4, 100])).to.eql([1, 2, 4, 5, 10, 20, 21, 100]);
    });

  });

  describe('mergeSort', function () {

    it('with 1 or fewer elements, returns sorted array', function () {
      expect(mergeSort([])).to.eql([]);
      expect(mergeSort([1000])).to.eql([1000]);
    });

    it('sorts array correctly', function () {
      const sorted = mergeSort([9, 1994, 18, 1, -90, 1234, 56]);
      expect(sorted).to.eql([-90, 1, 9, 18, 56, 1234, 1994]);
    });

  });

});
