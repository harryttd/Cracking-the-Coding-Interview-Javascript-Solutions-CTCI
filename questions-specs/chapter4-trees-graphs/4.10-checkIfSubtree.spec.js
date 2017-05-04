import { expect } from 'chai';
import { Tree } from './helpers';
import * as funcs from './4.10-checkIfSubtree';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch4-q10: ' + key, function() {

    beforeEach(function() {
      this.tree1 = new Tree();
      this.tree2 = new Tree();
    });

    it('throws an error if tree1 is null or empty', function() {
      expect(() => func(null, null)).to.throw('invalid input for tree1');
      expect(() => func(null, this.tree2)).to.throw('invalid input for tree1');
      expect(() => func(this.tree1, this.tree2)).to.throw('invalid input for tree1');
      this.tree2.add(1);
      expect(() => func(this.tree1, this.tree2)).to.throw('invalid input for tree1');
      expect(() => func(null, this.tree2)).to.throw('invalid input for tree1');
    });

    it('returns true where tree2 is null or empty', function() {
      this.tree1.add(1);
      expect(func(this.tree1, null)).to.be.true;
      expect(func(this.tree1, this.tree2)).to.be.true;
    });

    it('returns right value for simple 3 node balanced tree', function() {
      [10, 9, 11].forEach(v => this.tree1.add(v));
      this.tree2.root = this.tree1.root.left;
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = this.tree1.root.right;
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      [10, 9, 11].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
    });

    it('returns false with two different trees', function() {
      [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach(v => this.tree1.add(v));
      [20, 21, 1].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.false;
      this.tree2.root = null;
      [8, 2, 6].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.false;
      this.tree2.root = null;
      [11, 13, 6].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.false;
    });

    it('returns true with balanced tree where it is subtree', function() {
      [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach(v => this.tree1.add(v));
      [2, 1, 3].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      [12, 10, 14, 9, 11, 13, 15].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      [3].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
    });

    it('returns true when is a subtree but there exists multiple possible roots', function() {
      [3, 1, 3, 2, 3, 2, 3].forEach(v => this.tree1.add(v));
      this.tree2.add(3);
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.add(3);
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      this.tree2.add(2);
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      this.tree2.add(1);
      expect(func(this.tree1, this.tree2)).to.be.false;
    });

    it('returns false when tree2 is in tree1 but not a subtree (extra leaves)', function() {
      [1, 8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15, 2].forEach(v => this.tree1.add(v));
      [2, 1, 3].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.false;
    });

    it('returns true with imbalanced tree where it is subtree', function() {
      [10, 8, 16, 4, 14, 22, 6, 12, 18, 5, 17, 19].forEach(v => this.tree1.add(v));
      [4, 6, 5].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      [8, 4, 6, 5].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      [16, 14, 22, 12, 18, 17, 19].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      [14, 12].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
      this.tree2.root = null;
      [22, 18, 17, 19].forEach(v => this.tree2.add(v));
      expect(func(this.tree1, this.tree2)).to.be.true;
    });

  });

}
