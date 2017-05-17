import { expect } from 'chai';
import * as helpers from './helpers';
import * as funcs from './4.09-BSTsequences';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch4-q09: ' + key, function() {

    beforeEach(function() {
      this.tree = new helpers.Tree();
    });

    it('returns correct permutations for single node tree', function() {
      this.tree.add(1);
      expect(func(this.tree.root)).to.eql([[1]]);
    });

    it('returns correct permutations for 3 node tree', function() {
      [2, 1, 3].forEach(v => this.tree.add(v));
      expect(func(this.tree.root)).to.eql([[2, 1, 3], [2, 3, 1]]);
    });

    it('returns correct permutations for 5 node tree', function() {
      [4, 2, 3, 1, 5].forEach(v => this.tree.add(v));
      expect(func(this.tree.root)).to.eql([
        [4, 2, 1, 3, 5],
        [4, 2, 1, 5, 3],
        [4, 2, 5, 1, 3],
        [4, 5, 2, 1, 3],
        [4, 2, 3, 1, 5],
        [4, 2, 3, 5, 1],
        [4, 2, 5, 3, 1],
        [4, 5, 2, 3, 1]
      ]);
    });

    it('returns correct permutations for 6 node tree', function() {
      [4, 2, 3, 1, 0, 5].forEach(v => this.tree.add(v));
      expect(func(this.tree.root)).to.eql([
        [4, 2, 1, 0, 3, 5],
        [4, 2, 1, 0, 5, 3],
        [4, 2, 1, 5, 0, 3],
        [4, 2, 5, 1, 0, 3],
        [4, 5, 2, 1, 0, 3],
        [4, 2, 1, 3, 0, 5],
        [4, 2, 1, 3, 5, 0],
        [4, 2, 1, 5, 3, 0],
        [4, 2, 5, 1, 3, 0],
        [4, 5, 2, 1, 3, 0],
        [4, 2, 3, 1, 0, 5],
        [4, 2, 3, 1, 5, 0],
        [4, 2, 3, 5, 1, 0],
        [4, 2, 5, 3, 1, 0],
        [4, 5, 2, 3, 1, 0]
      ]);
    });

    it('Does not return duplicate permutations', function() {
      [1, 2, 2, 1, 1, 1].forEach(v => this.tree.add(v));
      const a = func(this.tree.root)
      expect(a).to.eql([
        [1, 1, 1, 1, 2, 2],
        [1, 1, 1, 2, 1, 2],
        [1, 1, 1, 2, 2, 1],
        [1, 1, 2, 1, 1, 2],
        [1, 1, 2, 1, 2, 1],
        [1, 1, 2, 2, 1, 1],
        [1, 2, 1, 1, 1, 2],
        [1, 2, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1],
        [1, 2, 2, 1, 1, 1]
      ]);

      this.tree = new helpers.Tree();
      `abba`.split``.forEach(l => this.tree.add(l));
      const b = func(this.tree.root);
      expect(b).to.eql([
        ['a', 'a', 'b', 'b'],
        ['a', 'b', 'a', 'b'],
        ['a', 'b', 'b', 'a']
      ]);
    });

  });

}
