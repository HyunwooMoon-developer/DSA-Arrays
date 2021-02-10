// Q5 . URLify a string
// common mistake users make when they type in an URL is to put spaces between words or letters.
// A solution that developers can use to solve this problem is to replace any spaces with a %20.

const URLify = function (url) {
  let newUrl = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === " ") {
      newUrl += "%20";
    } else {
      newUrl += url[i];
    }
  }
  return newUrl;
};

// O(n) Linear time

console.log(URLify("hyun woo moon")); //output : hyun%20woo%20moon
console.log(URLify("http://www.google.com / hello ")); //output : http://www.google.com%20/%20hello%20

// Q6 .  Filtering an array
// Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here;

const filtering = function (array, filterNumber) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > filterNumber) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// O(n) Linear time

console.log(filtering([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(filtering([-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// Q7. Max sum in the array
// Write an algorithm which will find the largest sum in a continuous sequence.
// input : [4, 6, -3, 5, -2, 1]
// output : 12

const maxSum = function (arr) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

// O(n^2) Polynomial time

console.log(maxSum([4, 6, -3, 5, -2, 1])); //output : 12;
console.log(maxSum([1, 5, 6, -2, 5, -3])); //output : 17;

// Q8 . Merge Arrays
//Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

const merge = function (arr1, arr2) {
  let newArr = [];
  newArr = arr1.concat(arr2);
  newArr = newArr.sort((a, b) => a - b);

  return newArr;
};

// O(n) Linear time

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// Q9 . Remove Characters
// Write an algorithm that deletes given characters from a string.
// removed are "aeiou"
// Do not use Javascript's filter, split, or join methods.
//
// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output : 'Bttl f th Vwls: Hw vs. Grzny'

const removeCharacter = function (string, character) {
  let newString = "";
  let checked = true;
  for (let i = 0; i < string.length; i++) {
    checked = true;
    for (let j = 0; j < character.length; j++) {
      if (string[i] === character[j]) {
        checked = false;
      }
    }
    if (checked) {
      newString += string[i];
    }
  }
  return newString;
};

// O(n^2) Polynomial time

console.log(
  removeCharacter("Battle of the Vowels: Hawaii vs. Grozny", "aeiou")
);

// Q 10 Products
// Given an array of numbers, write an algorithm that outputs an array
//where each index is the product of all the numbers in the input array except for the number at each current index.
// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

const products = function (arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let multiply = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        multiply *= arr[j];
      }
    }
    newArr.push(multiply);
  }
  return newArr;
};

// O(n^2) Polynomial time

console.log(products([1, 3, 9, 4]));


// Q 11 2D array
// Write an algorithm which searches through a 2D array,
// and whenever it finds a 0 should set the entire row and column to 0.

//Input:
//[[1,0,1,1,0],
//[0,1,1,1,0],
//[1,1,1,1,1],
//[1,0,1,1,1],
//[1,1,1,1,1]];

//Output:
//[[0,0,0,0,0],
//[0,0,0,0,0],
//[0,0,1,1,0],
//[0,0,0,0,0],
//[0,0,1,1,0]];

const sample = [[1,0,1,1,0],
                [0,1,1,1,0],
                [1,1,1,1,1],
                [1,0,1,1,1],
                [1,1,1,1,1]];

const twoDArray = function(arr){
    let newArr = [];

}

// O(n^2) Polynomial time
// two nested loop
console.log(twoDArray(sample))

//Q 12 String rotation
//Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
//Input: amazon, azonma => amazonamazon
// Output: False
// Input: amazon, azonam => amazonamazon
// Output: true

const rotation = function(str1, str2){
    const rotationStr = str1 +str1 ;

    return rotationStr.includes(str2);
}

// O(n) Linear time

console.log(rotation('amazon', 'azonma'));
console.log(rotation('amazon', 'azonam'));
console.log(rotation('bank', 'ankb'));
console.log(rotation('bank', 'knab'));