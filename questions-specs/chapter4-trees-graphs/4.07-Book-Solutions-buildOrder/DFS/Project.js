'use strict';

export default class Project {
  constructor(name) {
    this.name = name;
    this.state = this.constructor.State().BLANK;
    this.children = new Set();
  }

  static State() {
    return {COMPLETE: 'COMPLETE', PARTIAL: 'PARTIAL', BLANK: 'BLANK'};
  }

  getName() {
    return this.name;
  }

  addNeighbor(node) {
    this.children.add(node);
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }

  getChildren() {
    return this.children;
  }

}
