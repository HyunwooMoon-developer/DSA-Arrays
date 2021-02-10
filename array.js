/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Memory = require("./memory");


//as well as a length, you also have a capacity; how many items you can hold without needing to resize.
// In the push method, if the length is greater than the capacity then you resize according to the SIZE_RATIO. 
//Basically, each time you go over the capacity, you triple the size of memory which is allocated.
class Array {
  //The array starts out with a length of 0, and a pointer to 0 blocks of memory.
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }
  //resize the array so there is space for the new item using the _resize method
  //set the memory at this.ptr + length to be equal to the value.
  //push method resizes the array, then increases the length and sets a single memory address (both O(1) operations).
  push(value) {
    if(this.length >= this._capacity){
        this._resize((this.length + 1) * Array.SIZE_RATIO)
    }
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }
  //have to copy each item of data to a new box each time you resize the array, so that's n copies
  _resize(size){
      const oldPtr = this.ptr;
      this.ptr = Memory.allocate(size);
      if(this.ptr === null){
          throw new Error('Out of Memory');
      }
      Memory.copy(this.ptr, oldPtr, this.length);
      Memory.free(oldPtr)
      this._capacity = size ;
  }
  //retrive values
  get(index){
      if(index < 0 || index >= this.length){
          throw new Error('Index error');
      }
      return Memory.get(this.ptr + index);
  }
  //popping values
  pop(){
      if(this.length === 0){
          throw new Error('Index error');
      }
      const value = Memory.get(this.ptr + this.length -1);
      this.length -- ;
      return value;
  }
  //insert values
  insert(index, value){
      if(index < 0 || index >= this.length){
          throw new Error('Index error');
      }
      if(this.length >= this._capacity){
          this._resize((this.length + 1) * Array.SIZE_RATIO);
      }

      Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
      Memory.set(this.ptr + index, value);
      this.length ++ ;
  }
  //remove value
  remove(index){
      if(index < 0 || index >= this.length){
          throw new Error('Index Error');
      }
      Memory.copy(this.ptr + index , this.ptr + index + 1, this.length -1);
      this.length -- ;
  }
}

Array.SIZE_RATIO = 3;

function main(){
    Array.SIZE_RATIO = 3;

    //create an instance of the Array class
    let arr = new Array();

    arr.push(3);

    console.log(arr);
}

main();