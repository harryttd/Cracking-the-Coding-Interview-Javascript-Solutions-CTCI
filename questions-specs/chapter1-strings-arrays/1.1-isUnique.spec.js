import { expect } from 'chai';
import * as funcs from './1.1-isUnique';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch1-q1: ' + key, function() {

    [
      'abcdefghi',
      'jklpoiuqwerzxcvmnsadf',
      '1234567890',
      'AaBbCcDdeFg1234567890(*&^%$#@!)'
    ].forEach(arg => {

      it(`returns true for unique string: '${arg}'`, function() {
        expect(func(arg)).to.be.true;
      });

    });

    [
      'abcadef',
      'aaaaaaaaaa',
      'abcdefghijklmnopqrstuvwxyza',
      '1234567890asdklf1',
      '!@#$%^&*()(*#($&#(*$&#*($&#()))))'
    ].forEach(arg => {

      it(`returns false for string with dupes: '${arg}'`, function() {
        expect(func(arg)).to.be.false;
      });
    });
  });
}
