import { expect } from 'chai';
import { BuildOrder as BuildOrderDFS }  from './BuildOrder';

describe('ch4-q07: Book Solution DFS buildOrder', function() {

  beforeEach(function() {
    this.func = new BuildOrderDFS();
  });

  it('returns project where there is only one project', function() {
    expect(this.func.start([11], [])).to.eql([11]);
  });

  it('returns projects in the reverse of supplied order with no dependencies', function() {
    expect(this.func.start([9, 1, 5, 6], [])).to.eql([6, 5, 1, 9]);
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
    ])).to.eql(["f", "e", "b", "a", "d", "c"]);
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

    const result = [15, 1, 3, 7, 9, 5, 2, 6, 10, 13, 14, 4, 8, 12, 11];

    expect(this.func.start([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], dependencies)).to.eql(result);
  });

});
