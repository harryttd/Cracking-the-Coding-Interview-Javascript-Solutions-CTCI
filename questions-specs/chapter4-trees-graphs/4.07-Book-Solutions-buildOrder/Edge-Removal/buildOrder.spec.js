import { expect } from 'chai';
import { BuildOrder as EdgeRemoval } from './BuildOrder';

describe('ch4-q07: Book Solution Edge Removal buildOrder', function() {

  beforeEach(function() {
    this.func = new EdgeRemoval();
  });

  it('returns project where there is only one project', function() {
    expect(this.func.start([11], [])).to.eql([11]);
  });

  it('returns in the right order with simple chain of dependencies', function() {
    expect(this.func.start([9, 1, 5, 6], [
      [5, 6],
      [1, 5],
      [9, 1]
    ])).to.eql([9, 1, 5, 6]);
  });

  it('throws an error when dependences are cyclic', function() {
    expect(() => this.func.start([9, 1, 5, 6], [
      [6, 5],
      [5, 1],
      [1, 9],
      [9, 5]
    ])).to.throw('dependencies are cyclic');
  });

  it('passes book example', function() {
    expect(this.func.start(["a", "b", "c", "d", "e", "f"],
    [
      ["a", "d"],
      ["f", "b"],
      ["b", "d"],
      ["f", "a"],
      ["d", "c"]
    ])).to.eql(["e", "f", "b", "a", "d", "c"]);
  });

  it('correctly orders with larger acyclic graph', function() {
    const dependencies = [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 6],
      [3, 5],
      [3, 7],
      [4, 8],
      [8, 11],
      [8, 12],
      [6, 10],
      [5, 10],
      [7, 9],
      [10, 13],
      [9, 13],
      [13, 14]
    ];

    const result = [1, 15, 2, 3, 4, 6, 5, 7, 8, 10, 9, 11, 12, 13, 14];

    expect(this.func.start([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], dependencies)).to.eql(result);
  });

});
