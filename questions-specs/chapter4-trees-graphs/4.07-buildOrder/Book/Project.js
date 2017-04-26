'use strict';

export default class Project {
	constructor(name) {
    const State = {COMPLETE: 'COMPLETE', PARTIAL: 'PARTIAL', BLANK: 'BLANK'};
    this.name = name;
    this.state = State.BLANK;
    this.children = new Set();
  }

	getName() {
		return this.name;
	}

	addNeighbor(node) {
    if (!this.children.has(node)) {
      this.children.add(node);
    }
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
