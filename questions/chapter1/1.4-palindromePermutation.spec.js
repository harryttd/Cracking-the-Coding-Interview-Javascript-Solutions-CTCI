import { expect } from 'chai';
import * as funcs from './1.4-palindromePermutation';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch1-q4: ' + key, function() {

    it('returns false with null/undefined as input', function() {
      expect(func(undefined)).to.be.false;
      expect(func(null)).to.be.false;
    });

    // it('returns true for an empty array', function() {
    //   expect(func([])).to.be.true;
    // });

    [
      ' ',
      '   ',
      'aabb',
      'ab a b',
      ' a b a b ',
      'sasadfgsadfghjk;hjk;sadfghjk;dfghjk;',
      'sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;',
      'aabb c'
    ].forEach(arg => {

      it(`returns true for palindromic string: '${arg}'`, function() {
        expect(func(arg)).to.be.true;
      });

    });

    [
      'abcadef',
      '1234567890',
      'a b',
      'aabbcd'
    ].forEach(arg => {

      it(`returns false for non-palindromic string: '${arg}'`, function() {
        expect(func(arg)).to.be.false;
      });

    });

  });
}
