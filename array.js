/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Memory = require("./memory");

const memory = new Memory();

//as well as a length, you also have a capacity; how many items you can hold without needing to resize.
// In the push method, if the length is greater than the capacity then you resize according to the SIZE_RATIO.
//Basically, each time you go over the capacity, you triple the size of memory which is allocated.
//a capacity; how many items you can hold without needing to resize.

class Array {
  //The array starts out with a length of 0, and a pointer to 0 blocks of memory.
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
  //resize the array so there is space for the new item using the _resize method
  //set the memory at this.ptr + length to be equal to the value.
  //push method resizes the array, then increases the length and sets a single memory address (both O(1) operations).
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  //have to copy each item of data to a new box each time you resize the array, so that's n copies
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of Memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
  //retrive values
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return memory.get(this.ptr + index);
  }
  //popping values
  pop() {
    if (this.length === 0) {
      throw new Error("Index error");
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  //insert values
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  //remove value
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index Error");
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - 1);
    this.length--;
  }
}

Array.SIZE_RATIO = 3;


//Q1
function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the Array class
  let arr = new Array();
//Q2
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
//Q3
  arr.pop();
  arr.pop();
  arr.pop();
//Q4
  arr.push('tauhida');
  console.log(arr);
  console.log(arr.get(0));
  console.log(arr.get(1));
  console.log(arr.get(3)); //get NaN : because set number in memory

//_resize() : resize the array so there is space for the new item using the _resize method
}

main();
