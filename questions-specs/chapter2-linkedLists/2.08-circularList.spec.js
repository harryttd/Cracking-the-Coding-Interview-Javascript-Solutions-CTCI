import { expect } from 'chai';
import * as helpers from './helpers';
import * as funcs from './2.08-circularList';

const { getLoopStartNode } = funcs,
      loopCollisionFuncs = [funcs.circularList1, funcs.circularList2];

describe('ch2-q8: ---- RETURNS BEGINNING OF LOOP ---- ' + getLoopStartNode.name, function(){

  beforeEach(function() {
    this.list = helpers.createLinkedList();
  });

  it('returns null with empty list', function() {
    expect(getLoopStartNode(this.list.head)).to.be.null;
  });

  it('returns null when there is no loop', function() {
    helpers.push(this.list, 1, 2, 3, 4, 5, 6);
    expect(getLoopStartNode(this.list.head)).to.be.null;
  });

  it('returns beginning node of loop in circular list 1', function() {
    helpers.push(this.list, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
    let node = this.list.head.next.next.next;
    this.list.tail.next = node;
    expect(getLoopStartNode(this.list.head)).to.equal(node);
  });

  it('returns beginning node of loop in circular list 2', function() {
    helpers.push(this.list, 1, 2, 3, 4, 5, 6);
    let node = this.list.head;
    this.list.tail.next = node;
    expect(getLoopStartNode(this.list.head)).to.equal(node);
  });

  it('returns beginning node of loop in circular list 3', function() {
    helpers.push(this.list, 1, 2, 3, 4, 5, 6);
    let node = this.list.head.next.next.next;
    this.list.tail.next = node;
    expect(getLoopStartNode(this.list.head)).to.equal(node);
  });

  it('returns beginning node of loop in circular list 4', function() {
    helpers.push(this.list, 1, 2, 3, 4, 5, 6);
    let node = this.list.tail;
    this.list.tail.next = node;
    expect(getLoopStartNode(this.list.head)).to.equal(node);
  });
});

for (let func of loopCollisionFuncs) {

  describe('ch2-q8: ---- RETURNS COLLISION NODE ---- ' + func.name, function() {

    beforeEach(function() {
      this.list = helpers.createLinkedList();
    });

    it('returns null with empty list', function() {
      expect(func(this.list.head)).to.be.null;
    });

    it('returns null when there is no loop', function() {
      helpers.push(this.list, 1, 2, 3, 4, 5, 6);
      expect(func(this.list.head)).to.be.null;
    });

    it('returns node when there is a loop 1', function() {
      helpers.push(this.list, 1, 2, 3, 4, 5, 6);
      let node = this.list.head;
      this.list.tail.next = node;
      expect(func(this.list.head)).to.equal(node);
    });

    it('returns node when there is a loop 2', function() {
      helpers.push(this.list, 1, 2, 3, 4, 5, 6);
      let node = this.list.head.next.next.next;
      this.list.tail.next = node;
      expect(func(this.list.head)).to.equal(node);
    });

    it('returns node when there is a loop 3', function() {
      helpers.push(this.list, 1, 2, 3, 4, 5, 6);
      let node = this.list.tail;
      this.list.tail.next = node;
      expect(func(this.list.head)).to.equal(node);
    });

  });
}
