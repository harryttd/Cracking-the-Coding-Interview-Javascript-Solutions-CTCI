import { expect } from 'chai';
import * as funcs from './palindrome';

for (let key in funcs) {
  const func = funcs[key];

  describe('MISC Palindrome: ' + key, function() {

    if (func.name === 'palindrome') {
      it('throws error if input is not a string', function() {
        expect(() => func(null)).to.throw('invalid input');
      });
    }

    it('returns true/false for odd length string', function() {
      expect(func('racecar')).to.be.true;
      expect(func('civic')).to.be.true;

      expect(func('racxar')).to.be.false;
      expect(func('civc')).to.be.false;
    });

    it('returns true/false for even length string', function() {
      expect(func('noon')).to.be.true;
      expect(func('redder')).to.be.true;

      expect(func('noono')).to.be.false;
      expect(func('redderx')).to.be.false;
    });

  });

}
