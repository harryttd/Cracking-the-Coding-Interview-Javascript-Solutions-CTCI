'use strict';

export class MinStack {
  constructor() {
    this._stack = [];
    this._minStack = [];
    this._stackLength = this._minStackLength = 0;
  }

  push(value) {
    this._stack[this._stackLength] = value;
    this._stackLength++;

    const min = this._minStack[this._minStackLength - 1];
    if (min === undefined || value <= min) {
      this._minStack[this._minStackLength] = value;
      this._minStackLength++;
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const stackTop = this._stack[this._stackLength - 1];
      this._stack[this._stackLength - 1] = undefined;
      this._stackLength--;

      if (stackTop === this._minStack[this._minStackLength - 1]) {
        this._minStack.pop();
        this._minStackLength--;
      }

      return stackTop;
    }
  }

  min() {
    return this._minStack[this._minStackLength - 1];
  }

  peek() {
    return this._stack[this._stackLength - 1];
  }

  isEmpty() {
    return this._stackLength === 0;
  }
}
