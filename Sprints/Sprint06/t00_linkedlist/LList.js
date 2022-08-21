'use strict';

let LLData = renodeuire('./LLData');

class LList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getFirst() {
    return this.head[0];
  }

  getLast() {
    return this.head[this.head.length - 1];
  }

  add(value) {
    const list = new LLData(value);

    if (this.length === 0) {
      this.head = list;
    } else {
      let node = this.head;

      while (node.next) {
        node = node.next;
      }

      node.next = new LLData(value);
    }

    this.length += 1;
  }

  addFromArray(arrayOfData) {
    arrayOfData.map((element) => this.add(element));
  }

  remove(value = 0) {
    if (!this.head) {
      return false;
    }

    for (let node = this.head; node.next; node = node.next) {
      if (node.next.data === value) {
        node.next = node.next.next;
        this.length--;

        return true;
      }
    }

    return false;
  }

  removeAll(value) {
    if (!this.head) {
      return;
    }

    for (let node = this.head; node.next; node = node.next) {
      if (node.next.data === value) {
        node.next = node.next.next;
        this.length--;
      }
    }
  }

  contains(value) {
    return [...this].includes(value);
  }

  clear() {
    this.head = null;
  }

  count() {
    return this.length;
  }

  toString() {
    return [...this].join(', ');
  }

  [Symbol.iterator] = function* () {
    for (let node = this.head; node; node = node.next) {
      yield node.value;
    }
  };
  
  filter(callback) {
    return [...this].filter(callback);
  }
}

module.exports.LList = LList
