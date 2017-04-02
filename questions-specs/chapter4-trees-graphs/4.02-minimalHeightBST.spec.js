import { expect } from 'chai';
import { isBalanced } from './helpers';
import { minimalHeightBST } from './4.2-minimalHeightBST';

describe('ch4-q02: Book Solution minimalHeightBST', function() {
  const func = minimalHeightBST;

  it('returns empty tree with no values', function() {
    let tree = func(null);
    expect(tree).to.be.null;
    tree = func([]);
    expect(tree).to.be.null;
  });

  it('returns tree with root node set with one value', function() {
    let tree = func([10]);
    expect(tree.value).to.equal(10);
  });

  it('returns a balanced tree with 10 nodes', function() {
    let tree = func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(isBalanced(tree)).to.be.true;
  });

  it('returns a balanced tree with 13 nodes', function() {
    let tree = func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(isBalanced(tree)).to.be.true;
  });

  it('returns a balanced tree with 255 nodes', function() {
    let values = [];
    for (let i = 1; i <= 255; ++i) {
      values.push(i);
    }
    let tree = func(values);
    expect(isBalanced(tree)).to.be.true;
  });

});
