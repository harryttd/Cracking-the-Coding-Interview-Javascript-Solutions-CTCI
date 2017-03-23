'use strict';

// USES ADDITIONAL ARRAY TO KEEP TRACK OF MIN'S
export class MinStack1 {
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

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// USES AN OBJECT FOR EVERY PUSHED NUMBER TO KEEP TRACK OF THE MIN AT THAT POINT IN THE STACK
export class MinStack2 {
  constructor() {
    this._stack = [];
  }

  push(value) {
    const min = this.min();
    this._stack.push({
      value,
      min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
    });
  }

  pop() {
    if (!this.isEmpty()) {
      const item = this._stack.pop();
      return item.value;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      const item = this._stack[this._stack.length - 1];
      return item.value;
    }
  }

  min() {
    if (!this.isEmpty()) {
      const item = this._stack[this._stack.length - 1];
      return item.min;
    }
  }

  isEmpty() {
    return this._stack.length === 0;
  }

}
