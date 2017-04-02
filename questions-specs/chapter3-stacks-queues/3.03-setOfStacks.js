'use strict';

export class SetOfStacks {
  constructor(maxSize) {
    if (!maxSize) throw Error('maxSize argument is required');
    this._stacks = [[]];
    this._maxSize = maxSize;
  }

  push(value) {
    const stacksLength = this._stacks.length;
    if (this._stacks[stacksLength - 1].length === this._maxSize) {
      this._stacks[stacksLength] = [];
    }
    this._stacks[this._stacks.length - 1].push(value);
  }

  pop() {
    const stacksLength = this._stacks.length,
          poppedValue = this._stacks[stacksLength - 1].pop();

    if (stacksLength > 1 && !this._stacks[stacksLength - 1].length) {
      this._stacks.pop();
    }
    return poppedValue;
  }

  // MOVES LATER STACKS ELEMENT'S INTO PREVIOUS STACKS
  popAt(stackNumber) {
    const stackToPopFrom = this._stacks[stackNumber - 1];
    if (!stackToPopFrom) throw Error('Invalid stack number');
    if (stackNumber === this._stacks.length) return this.pop();

    const poppedValue = stackToPopFrom.pop(),
          stacksLength = this._stacks.length;

    if (stackNumber < stacksLength) {
      for (let i = stackNumber - 1; i < stacksLength - 1; i++) {
        this._stacks[i].push(this._stacks[i + 1].shift());
      }
    }

    if (this._stacks.length > 1 && !this._stacks[this._stacks.length - 1].length) {
      this._stacks.pop();
    }

    return poppedValue;
  }

  peek(stackNum) {
    const stack = this._stacks[stackNum - 1];
    return stack ? stack[stack.length - 1] : Error('Invalid stack number');
  }

}
