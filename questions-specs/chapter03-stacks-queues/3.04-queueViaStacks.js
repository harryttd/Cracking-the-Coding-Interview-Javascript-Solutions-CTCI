'use strict';

export class queueViaStacks {
  constructor() {
    this._newStack = [];
    this._oldStack = [];
  }

  enqueue(value) {
    this._newStack.push(value);
  }

  dequeue() {
    this._shiftStacks();
    return this._oldStack.pop();
  }

  peek() {
    this._shiftStacks();
    return this._oldStack[this._oldStack.length - 1];
  }

  _shiftStacks() {
    const newStackLength = this._newStack.length,
          oldStackLength = this._oldStack.length;

    if (!newStackLength && !oldStackLength) throw Error('Queue is empty');
    if (!oldStackLength) {
      while (this._newStack.length) {
        this._oldStack.push(this._newStack.pop());
      }

      // CONCAT CREATES A NEW ARRAY
      // this._oldStack = this._oldStack.concat(this._newStack.splice(0, this._newStack.length).reverse());

      // THIS IS BETTER AS IT DOES NOT CREATE A NEW ARRAY
      // this._oldStack.push.apply(this._oldStack, this._newStack.splice(0, this._newStack.length).reverse());
    }
  }

}
