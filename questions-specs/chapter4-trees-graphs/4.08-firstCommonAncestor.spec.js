import { expect } from 'chai';
import { Tree } from './helpers';
import * as funcs from './4.08-firstCommonAncestor';

for (let key in funcs) {
  let func = funcs[key];

  describe.only('ch4-q08: ' + key, function() {

    beforeEach(function() {
      this.tree = new Tree();
    });

    it('throws an error if either node is null', function() {
      this.tree.add(1);
      expect(() => func(null, null)).to.throw('invalid node(s)');
      expect(() => func(this.tree.root, null)).to.throw('invalid node(s)');
      expect(() => func(null, this.tree.root)).to.throw('invalid node(s)');
    });

    it('returns correct value for simple 3 node balanced tree', function() {
      [10, 9, 11].forEach(v => this.tree.add(v));
      expect(func(this.tree.root.left, this.tree.root.right, this.tree)).to.equal(10);
      expect(func(this.tree.root, this.tree.root.right, this.tree)).to.equal(10);
      expect(func(this.tree.root.left, this.tree.root, this.tree)).to.equal(10);
    });

    it('returns correct values for larger balanced tree', function() {
      [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach(v => this.tree.add(v));

      expect(func(this.tree.root.left.left.left, this.tree.root.left.left.left, this.tree)).to.equal(1);
      expect(func(this.tree.root.left.left.left, this.tree.root.left.left.right, this.tree)).to.equal(2);
      expect(func(this.tree.root.left.left.right, this.tree.root.left.left.left, this.tree)).to.equal(2);

      expect(func(this.tree.root.left, this.tree.root.left, this.tree)).to.equal(4);
      expect(func(this.tree.root.left.left.right, this.tree.root.left, this.tree)).to.equal(4);
      expect(func(this.tree.root.left.left.right, this.tree.root.left.right, this.tree)).to.equal(4);
      expect(func(this.tree.root.left.left.left, this.tree.root.left.right.left, this.tree)).to.equal(4);
      expect(func(this.tree.root.left.left.left, this.tree.root.left.right.right, this.tree)).to.equal(4);
      expect(func(this.tree.root.left.left.right, this.tree.root.left.right.left, this.tree)).to.equal(4);
      expect(func(this.tree.root.left.left.right, this.tree.root.left.right.right, this.tree)).to.equal(4);

      expect(func(this.tree.root.left.left.right, this.tree.root, this.tree)).to.equal(8);
      expect(func(this.tree.root.left.left.right, this.tree.root.right, this.tree)).to.equal(8);
      expect(func(this.tree.root.left.left.right, this.tree.root.right.right, this.tree)).to.equal(8);
      expect(func(this.tree.root.left.left.right, this.tree.root.right.left.left, this.tree)).to.equal(8);
      expect(func(this.tree.root.left.left.right, this.tree.root.right.left.right, this.tree)).to.equal(8);
      expect(func(this.tree.root.left.left.right, this.tree.root.right.right.left, this.tree)).to.equal(8);
      expect(func(this.tree.root.left.left.right, this.tree.root.right.right.right, this.tree)).to.equal(8);
    });

  });

}
