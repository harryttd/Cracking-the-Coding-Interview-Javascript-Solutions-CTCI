'use strict';

export class AnimalShelter {
  constructor() {
    this._cats = [];
    this._dogs = [];
    this._id = 0;
  }

  enqueueCat(cat) {
    this._cats.push( {name: cat, id: this._id++} );
  }

  enqueueDog(dog) {
    this._dogs.push( {name: dog, id: this._id++} );
  }

  dequeueCat() {
    return this._cats.shift().name;
  }

  dequeueDog() {
    return this._dogs.shift().name;
  }

  dequeueAny() {
    const catsLength = this._cats.length, dogsLength = this._dogs.length;

    if (catsLength && dogsLength) {
      return this._peek(this._cats).id < this._peek(this._dogs).id ? this.dequeueCat() : this.dequeueDog();
    } else {
      if (catsLength) return this.dequeueCat();
      if (dogsLength) return this.dequeueDog();
    }

  }

  _peek(queue) {
    return queue[0];
  }

}
