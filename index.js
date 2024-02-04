// Write a function that takes a number as an argument and returns 'even' or 'odd'.
function evenOrOdd(nums) {
  return nums % 2 === 0 ? "even" : "odd";
}

console.log(evenOrOdd(5)); // Output: 'odd'
console.log(evenOrOdd(4)); // Output: 'even'

// ------------------------------------------------------------

// Create a function that checks if the length of a given string is greater than a specified number. Return true or false.
function isStringLengthGreaterThan(string, num) {
  return string.length > num ? true : false;
}

console.log(isStringLengthGreaterThan("Hello, World!", 5)); // Output: true

console.log(isStringLengthGreaterThan("Hello", 5)); // Output: false

// ------------------------------------------------------------

// Implement a function that concatenates two strings and returns the result.
function concatenateStrings(str1, str2) {
  return str1 + str2;
}

console.log(concatenateStrings("Hello", "World")); // Output: 'HelloWorld'

// ------------------------------------------------------------

// Write a function using interpolation to generate a string that includes the value of a given variable.
function interpolateVariable(str, num) {
  return `${str}${num}`;
}

console.log(interpolateVariable("My age is: ", 25)); // Output: 'My age is: 25'

console.log(interpolateVariable("My age is: ", 30)); // Output: 'My age is: 25'

// ------------------------------------------------------------

// Develop a function that calculates the sum of numbers in a given range.
//For loop
// function sumRange(num1, num2) {
//   let sum = 0
//   for(let i = num1; i <= num2; i++) {
//     sum += i;
//   }
//   return sum;
// }

//While loop
function sumRange(num1, num2) {
  let sum = 0;
  while (num1 <= num2) {
    sum += num1;
    num1++;
  }
  return sum;
}

console.log(sumRange(1, 5)); // Output: 15
console.log(sumRange(1, 6)); // Output: 21

// ------------------------------------------------------------

// Create a function that sums up all odd numbers in a given range using a loop.
// function sumOddNumbersInRange(num1, num2) {
//   let sum = 0;
//   for (let i = num1; i <= num2; i++) {
//     if(i % 2 === 1) {
//       sum += i
//     }
//   }
//   return sum;
// }

function sumOddNumbersInRange(num1, num2) {
  let sum = 0;
  while (num1 <= num2) {
    if (num1 % 2 === 1) {
      sum += num1;
    }
    num1++;
  }
  return sum;
}

console.log(sumOddNumbersInRange(1, 10)); // Output: 25
console.log(sumOddNumbersInRange(1, 11)); // Output: 36

// ------------------------------------------------------------

// Implement a function that returns the first element of an array.
function getFirstElement(array) {
  return array.shift();
}

console.log(getFirstElement([1, 2, 3])); // Output: 1
console.log(getFirstElement([2, 3])); // Output: 2

// ------------------------------------------------------------

// Write a function to get the last element of an array.
function getLastElement(array) {
  return array.pop();
}

console.log(getLastElement([1, 2, 3])); // Output: 3
console.log(getLastElement([1, 2, 3, 4])); // Output: 4

// ------------------------------------------------------------

// Build a function to replace an element at a specific index in an array and returns the altered array.
function replaceElementAtIndex(array, index, replace) {
  array.splice(index, 1, replace); //splice(start, deleteCount, item1, item2)
  return array;
}

console.log(replaceElementAtIndex([1, 2, 3], 1, 5)); // Output: [1, 5, 3]
console.log(replaceElementAtIndex([1, 2, 3], 2, 6)); // Output: [1, 2, 6]

// ------------------------------------------------------------

// Develop a function that removes an element from the beginning of an array.
function removeFirstElement(array) {
  array.shift();
  return array;
}

console.log(removeFirstElement([1, 2, 3])); // Output: [2, 3]
console.log(removeFirstElement([0, 1, 2, 3])); // Output: [1, 2, 3]

// ------------------------------------------------------------

// Create a function to remove an element from the end of an array and return the removed element.
function removeLastElement(array) {
  let removedElement = array.pop();
  return removedElement;
}

console.log(removeLastElement([1, 2, 3])); // Output: 3
console.log(removeLastElement([1, 2, 3, 4])); // Output: 4

// ------------------------------------------------------------

// Implement a function to remove an element at a given index in an array and returns the input array.
function removeElementAtIndex(array, index) {
  array.splice(index, 1); //splice(start, deleteCount, item1, item2)
  return array;
}

console.log(removeElementAtIndex([1, 2, 3], 1)); // Output: [1, 3]
console.log(removeElementAtIndex([1, 2, 3], 2)); // Output: [1, 2]

// ------------------------------------------------------------

// Write a function that converts all characters in a string to uppercase.
function toUpperCaseString(word) {
  return word.toUpperCase();
}

console.log(toUpperCaseString("hello")); // Output: 'HELLO'
console.log(toUpperCaseString("world")); // Output: 'WORLD'

// ------------------------------------------------------------

// Create a function to properly capitalize each word in a string of words.
function capitalizeWords(word) {
  const arrStr = word.split(" ");
  const newArr = [];
  let upper = null;

  for (let i = 0; i < arrStr.length; i++) {
    upper = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1); //remember to assign it to variable & then push
    newArr.push(upper);
  }
  return newArr.join(" ");
}

console.log(capitalizeWords("hello world")); // Output: 'Hello World'
console.log(capitalizeWords("whats up joe?")); // Output: 'Whats Up Joe?'

// ------------------------------------------------------------

// Develop a function that returns the element at the middle index of an array.
function getMidIndexElement(nums) {
  return Math.ceil(nums.length / 2); //Math.ceil rounds up; Math.floor rounds down; Math.round() rounds to nearest
}

console.log(getMidIndexElement([1, 2, 3, 4, 5])); // Output: 3

console.log(getMidIndexElement([1, 2, 3, 4, 5, 6, 7])); // Output: 4

// ------------------------------------------------------------

// Implement a function to calculate the sum of all numbers in an array.
const sumArray = (nums) => nums.reduce((acc, curr) => (acc += curr)); //native array method .reduce();
// function sumArray(nums) {
//   let sum = 0;
//   for(let num of nums) {
//     sum += num;
//   }
//   return sum;
// }

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// ------------------------------------------------------------

// Create a function that returns the sum of all odd or even numbers in an array.
//Native Array Method using reduce
// const sumOddNumbersArray = nums => nums.reduce((acc, curr) => curr % 2 === 1 ? acc + curr : acc, 0);
function sumOddNumbersArray(array) {
  let sum = 0;
  for (let num of array) {
    if (num % 2 === 1) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOddNumbersArray([1, 2, 3, 4])); // Output: 4
console.log(sumOddNumbersArray([1, 2, 3, 4, 5])); // Output: 9

// ------------------------------------------------------------

// Write a function to find the maximum number in an array using a loop and the accumulator pattern.
function findMaxUsingLoop(nums) {
  let acc = 0;
  for (let num of nums) {
    if (num > acc) {
      acc = num;
    }
  }
  return acc;
}

//Using Native Array Mehtod reduce
// const findMaxUsingLoop = nums => nums.reduce((acc, curr) => curr > acc ? curr : acc, 0);

console.log(findMaxUsingLoop([1, 5, 3, 8, 2])); // Output: 8
console.log(findMaxUsingLoop([1, 5, 3, 2])); // Output: 5

// ------------------------------------------------------------

// Develop a function to find the minimum number in an array using the .reduce method.
const findMinUsingReduce = (arr) =>
  arr.reduce((acc, curr) => (curr < acc ? curr : acc), Infinity);

console.log(findMinUsingReduce([1, 5, 3, 8, 2])); // Output: 1

console.log(findMinUsingReduce([5, 3, 8, 2])); // Output: 2

// ------------------------------------------------------------

// Create a function to find the maximum number in an array using Math.max.
function findMaxUsingMathMax(arr) {
  let max = -Infinity;
  for (num of arr) {
    max = Math.max(max, num);
  }
  return max;
}
console.log(findMaxUsingMathMax([1, 5, 3, 8, 2])); // Output: 8
console.log(findMaxUsingMathMax([1, 5, 19, 8, 2])); // Output: 19

// ------------------------------------------------------------

// Implement a function to create a new array with all numbers doubled using a for loop and the accumulator pattern.
function doubleNumbersUsingLoop(arr) {
  const newArr = [];
  for (num of arr) {
    newArr.push(num * 2);
  }
  return newArr;
}

console.log(doubleNumbersUsingLoop([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbersUsingLoop([1, 3, 7, 10])); // Output: [2, 6, 14, 20]

// ------------------------------------------------------------

// Write a function to create a new array with all numbers doubled using the .map method.
const doubleNumbersUsingMap = (array) => array.map((num) => num * 2);

console.log(doubleNumbersUsingMap([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbersUsingMap([1, 3, 7, 10])); // Output: [2, 6, 14, 20]

// ------------------------------------------------------------

// Develop a function to create a new array with only the odd numbers using a for loop and the accumulator pattern.
function oddNumbersUsingLoop(arr) {
  const newArr = [];
  for (num of arr) {
    if (num % 2 === 1) {
      newArr.push(num);
    }
  }
  return newArr;
}

console.log(oddNumbersUsingLoop([1, 2, 3])); // Output: [1, 3]
console.log(oddNumbersUsingLoop([2, 3, 4, 5, 6, 7])); // Output: [3, 5 ,7]

// ------------------------------------------------------------

// Create a function to create a new array with only the odd numbers using the .filter method.
const oddNumbersUsingFilter = (arr) => arr.filter((num) => num % 2 === 1);
console.log(oddNumbersUsingFilter([1, 2, 3])); // Output: [1, 3]
console.log(oddNumbersUsingLoop([2, 3, 4, 5, 6, 7])); // Output: [3, 5 ,7]

// ------------------------------------------------------------

// Implement a function to find an element in an array using a for loop and the accumulator pattern. If the element can't be found in the array return an error string
function findElementUsingLoop(arr, element) {
  for (ele of arr) {
    if (ele === element) {
      return ele;
    }
  }
  return "ERROR";
}
console.log(findElementUsingLoop([1, 2, 3], 2)); // Output: 2
console.log(findElementUsingLoop(["a", "b", "c", "d"], "c")); // Output: "c"
console.log(findElementUsingLoop([1, 2, 3, 4, 5], 6)); // Output: "ERROR"

// ------------------------------------------------------------

// Write a function to find an element in an array using the .find method.
const findElementUsingFind = (arr, element) => {
  const foundElement = arr.find((ele) => ele === element);
  return foundElement !== undefined ? foundElement : "ERROR";
};

console.log(findElementUsingFind(["a", "b", "c", "d"], "c")); // Output: "c"
console.log(findElementUsingFind([1, 2, 3, 4, 5], 6)); // Output: "ERROR"

// ------------------------------------------------------------

// Develop a function to set a key in an object to a value if it doesn't exist, and return the object. If the key exists, return the object as is.
function setKeyValueInObject(obj, key, value) {
  if (!obj[key]) {
    obj[key] = value;
  }
  return obj;
}

console.log(setKeyValueInObject({ key1: "value1" }, "key2", "value2"));
// Output: { key1: 'value1', key2: 'value2' }

console.log(setKeyValueInObject({ key1: "value1" }, "key1", "value2"));
// Output: { key1: 'value1' }

// ------------------------------------------------------------

// Create a function to return a new array with only unique elements from an array with duplicate elements.
function uniqueElementsArray(arr) {
  const newArr = [];
  for (num of arr) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}

console.log(uniqueElementsArray([1, 2, 2, 3])); // Output: [1, 2, 3]
console.log(uniqueElementsArray([1, 2, 2, 3, 3, 4, 3, 2])); // Output: [1, 2, 3, 4]

// ------------------------------------------------------------

// Write a function to return an object with the elements as keys and the count of them as values.
function elementsCountObject(array) {
  let obj = {};
  for (let ele of array) {
    if (obj[ele]) {
      obj[ele]++;
    } else {
      obj[ele] = 1;
    }
  }
  return obj;
}
console.log(elementsCountObject([1, 2, 2, 3]));
// Output: { '1': 1, '2': 2, '3': 1 }

console.log(elementsCountObject(["a", "b", "b", "a", "c", "d", "a"]));
// Output: { a: 3, b: 2, c: 1, d: 1 }

// ------------------------------------------------------------

// Implement a function to return an array of all the keys in an object.
function keysArray(arr) {
  return Object.keys(arr);
}
console.log(keysArray({ key1: "value1", key2: "value2" }));
// Output: ['key1', 'key2']

// ------------------------------------------------------------

// Develop a function to return an array of all the values in an object.
function valuesArray(arr) {
  return Object.values(arr);
}
console.log(valuesArray({ key1: "value1", key2: "value2" }));
// Output: ['value1', 'value2']

// ------------------------------------------------------------

// Write a function to round up a decimal number.
function roundUpDecimal(num) {
  return Math.ceil(num);
}
console.log(roundUpDecimal(3.14)); // Output: 4
console.log(roundUpDecimal(5.74)); // Output: 6

// ------------------------------------------------------------

// Implement a function to round down a decimal number.
function roundDownDecimal(num) {
  return Math.floor(num);
}
console.log(roundDownDecimal(3.14)); // Output: 3
console.log(roundDownDecimal(5.74)); // Output: 5

// ------------------------------------------------------------

// Develop a function to return the sum of all numbers in an array using the .reduce method.
const sumArrayReduce = (array) => array.reduce((acc, curr) => acc + curr, 0);

console.log(sumArrayReduce([1, 2, 3, 4])); // Output: 10
console.log(sumArrayReduce([1, 2, 3, 4, 5])); // Output: 15

// ------------------------------------------------------------

// Create a function to return the product of all numbers in an array using the .reduce method.
const productArrayReduce = (array) =>
  array.reduce((acc, curr) => acc * curr, 1);

console.log(productArrayReduce([1, 2, 3, 4])); // Output: 24
console.log(productArrayReduce([1, 2, 3, 4, 5])); // Output: 120

// ------------------------------------------------------------

// Implement a function to calculate the average of numbers in an array.
function averageArray(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

console.log(averageArray([1, 2, 3, 4])); // Output: 2.5
console.log(averageArray([1, 2, 3, 4, 5])); // Output: 3

// ------------------------------------------------------------

// Write a function to calculate the factorial of a given number.
function factorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720

// ------------------------------------------------------------

// Develop a function to return the reverse of a given string.
function reverseString(str) {
  let arr = str.split("");
  return arr.reverse().join("");
}

console.log(reverseString("hello")); // Output: 'olleh'
console.log(reverseString("hello world")); // Output: 'dlrow olleh'

// ------------------------------------------------------------

// Develop a function to convert a temperature from Celsius to Fahrenheit.
//C to F => (C * 9/5) + 32; F to C => (F -32) * 5/9;
function celsiusToFahrenheit(celsius) {
  let Fahrenheit = (celsius * 9) / 5 + 32;
  return Fahrenheit;
}

console.log(celsiusToFahrenheit(25)); // Output: 77
console.log(celsiusToFahrenheit(31)); // Output: 87.8

// ------------------------------------------------------------

// Write a function to find the longest word in a given string.
function findLongestWord(str) {
  let arr = str.split(" ");
  let longestLength = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestLength.length) {
      longestLength = arr[i];
    }
  }
  return longestLength;
}
console.log(findLongestWord("The quickest brown fox")); // Output: 'quickest'
console.log(findLongestWord("The brown fox")); // Output: 'brown'

// ------------------------------------------------------------

// Implement a function to count the occurrences of a specific element in an array.
function countOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 2, 3], 2)); // Output: 2
console.log(countOccurrences([1, 2, 2, 3, 4, 5, 3, 3, 3], 3)); // Output: 4
console.log(countOccurrences([1, 2, 2, 3, 4, 5, 3, 3, 3], 7)); // Output: 0

// ------------------------------------------------------------

// Create a function to check if all elements in an array are of the same type.
function areAllSameType(arr) {
  let type = typeof arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== type) {
      return false;
    }
  }
  return true;
}
console.log(areAllSameType([1, 2, "three"])); // Output: false
console.log(areAllSameType([1, 2, 3])); // Output: true

// ------------------------------------------------------------

// Implement a function to find the index of the first occurrence of a given element in an array.
//Using .findIndex() Native Array Method
const findIndexOfElement = (array, value) =>
  array.findIndex((ele) => ele === value);

// function findIndexOfElement(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
// }

console.log(findIndexOfElement([1, 2, 3], 2)); // Output: 1
console.log(findIndexOfElement([1, 2, 3, 4, 5, 6], 5)); // Output: 4
console.log(findIndexOfElement([1, 2, 3, 4, 5, 6, 4], 4)); // Output: 3

// ------------------------------------------------------------

// Develop a function to reverse the order of elements in an array.
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray([3, 2, 1])); // Output: [1, 2, 3]

// ------------------------------------------------------------

// Implement a function to capitalize the first letter of a string.
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello")); // Output: 'Hello'
console.log(capitalizeFirstLetter("hello world")); // Output: 'Hello world'

// ------------------------------------------------------------

// Write a function to check if a given number is within a specified range.
function isNumberInRange(num, start, end) {
  for (let i = start; i <= end; i++) {
    if (num === i) {
      return true;
    }
  }
  return false;
}
console.log(isNumberInRange(5, 1, 10)); // Output: true
//                            (num, start, end)
console.log(isNumberInRange(12, 1, 10)); // Output: false

// ------------------------------------------------------------

// Develop a function to count the number of vowels in a string.
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello, World!")); // Output: 3
console.log(countVowels("Good Morning")); // Output: 4

// ------------------------------------------------------------

// Write a function to calculate the area of a circle given its radius.
// area of a circle = Pi * radius^2
// Use .toFixed() || .toFixed(digits)
//The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.
function calculateCircleArea(radius) {
  let area = Math.PI * radius ** 2;
  return area.toFixed(2);
}
console.log(calculateCircleArea(5)); // Output: 78.54
console.log(calculateCircleArea(6)); // Output: 113.1

// ------------------------------------------------------------

// Develop a function to remove a specific character from a string.
function removeSpecificCharacters(str, char) {
  return str.replaceAll(char, "");
}

console.log(removeSpecificCharacters("Hello, World!", "l")); // Output: 'Heo, Word!'
console.log(removeSpecificCharacters("Hello, World!", "o")); // Output: 'Hell, Wrld!'

// ------------------------------------------------------------

// Create a function to find the object with the longest array among an array of objects, each containing a key pointing to an array.
function objectWithLongestArray(array) {
  let longestArray = [];
  let answer = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i]["value"].length > longestArray.length) {
      longestArray = array[i]["value"];
      answer = array[i];
    }
  }
  return answer;
}

console.log(
  objectWithLongestArray([
    { key: "array1", value: [1, 2, 3] },
    { key: "array2", value: [1, 2, 3, 4, 5] },
  ])
);
// Output: { key: 'array2', value: [1, 2, 3, 4, 5] }

// ------------------------------------------------------------

// Develop a function to return a new array of only the values of a specified key from an array of objects.
// function arrayValuesByKey(arr, key) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i][key]);
//   }
//   return newArr;
// }

//Using .map()
const arrayValuesByKey = (array, key) => array.map((obj) => obj[key]);

console.log(
  arrayValuesByKey(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Bob", age: 35 },
    ],
    "age"
  )
); // Output: [30, 25, 35]

console.log(
  arrayValuesByKey(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Bob", age: 35 },
    ],
    "name"
  )
); // Output: ["John", "Jane", "Bob"]

// ------------------------------------------------------------

// Write a function to return the value of a decimal number rounded to the nearest whole number.
//Round to nearest whole number -> Math.round();
function roundToNearestWholeNumber(num) {
  return Math.round(num);
}

console.log(roundToNearestWholeNumber(3.5)); // Output: 4
console.log(roundToNearestWholeNumber(3.4)); // Output: 3
console.log(roundToNearestWholeNumber(3.9)); // Output: 4

// ------------------------------------------------------------

// Write a function that takes an object and a property name, and removes the specified property from the object.
function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}

console.log(removeProperty({ name: "John", age: 30 }, "age"));
// Output: { name: 'John' }

console.log(removeProperty({ name: "John", age: 30 }, "name"));
// Output: { age: 30 }

// ------------------------------------------------------------

// Write a function that takes two objects and merges them into a new object.
function mergeObjects(obj1, obj2) {
  let obj3 = {};
  obj3 = { ...obj1, ...obj2 };
  return obj3;
}
console.log(mergeObjects({ name: "John" }, { age: 30 }));
// Output: { name: 'John', age: 30 }

// ------------------------------------------------------------

// Write a function that takes an array of objects, each containing a key-value pair with a key pointing to an array, and returns the object with the longest array.
function findObjectWithLongestValue(arr) {
  let longestArray = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]["value"].length > longestArray["value"].length) {
      longestArray = arr[i];
    }
  }
  return longestArray;
}

console.log(
  findObjectWithLongestValue([
    { key: "array1", value: [1, 2, 3] },
    { key: "array2", value: [1, 2, 3, 4, 5, 6] },
    { key: "array3", value: [1, 2] },
  ])
); // Output: { key: 'array2', value: [1, 2, 3, 4, 5, 6] }

// ------------------------------------------------------------

// Write a function that takes an array of objects and a property name, and sorts the objects in ascending order based on the specified property.
//! Following only works for the age key, but what if I want to sort the names a-z?
// const sortObjectsByProperty = (arr, key) => arr.sort((curr, next) => curr[key] - next[key]);
//!Got it!!! Remember this, 100% will be on exam.
  const sortObjectsByProperty = (arr, key) => arr.sort((curr, next) => typeof curr[key] === 'number' ? curr[key] - next[key] : curr[key].localeCompare(next[key]));
console.log(
  sortObjectsByProperty(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Bob", age: 35 },
    ],
    "age"
  )
);
// Output: [ { name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 } ]

// ------------------------------------------------------------

// Write a function to remove duplicates from an array.
function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      arr.splice(i, 1);
    }
    newArr.push(arr[i]);
  }
  return arr;
}

console.log(removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]

// ------------------------------------------------------------

// BONUS

// ------------------------------------------------------------

// Write a function that takes an array of objects, a property name, and a property value. It filters the objects based on the given property and value, returning an array of matching objects.

// console.log(filterObjectsByProperty([
//   { name: 'John', age: 30, city: 'New York' },
//   { name: 'Jane', age: 25, city: 'San Francisco' },
//   { name: 'Bob', age: 35, city: 'New York' }
// ], 'city', 'New York'));
// Output: [ { name: 'John', age: 30, city: 'New York' }, { name: 'Bob', age: 35, city: 'New York' } ]

// ------------------------------------------------------------

// Create a function that checks if a string is a palindrome.

// console.log(isPalindrome("racecar")); // Output: true

// ------------------------------------------------------------

// Implement a function to remove white spaces from both ends of a string.

// console.log(trimWhitespace("  hello  ")); // Output: 'hello'

// ------------------------------------------------------------

// Write a function to check if a given string contains a specific substring.

// console.log(containsSubstring("Hello, World!", "World")); // Output: true

// ------------------------------------------------------------

// Create a function to generate a random number within a specified range.

// console.log(generateRandomNumber(1, 10)); // Output: Random number between 1 and 10

// ------------------------------------------------------------

// Develop a function to find the second largest number in an array.

// console.log(findSecondLargestNumber([1, 5, 3, 8, 2])); // Output: 5

// ------------------------------------------------------------

// Develop a function to sort an array of strings in alphabetical order.

// console.log(sortAlphabetically(["banana", "apple", "orange"])); // Output: ['apple', 'banana', 'orange']

// ------------------------------------------------------------

// Write a function to check if a number is prime.

// console.log(isPrime(7)); // Output: true

// ------------------------------------------------------------

// Create a function to merge two sorted arrays into a new sorted array.

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// ------------------------------------------------------------

// Implement a function to extract numbers from a string and return them as an array.

// console.log(extractNumbersFromString("Age: 25, Height: 180cm")); // Output: [2, 5, 1, 8, 0]

// ------------------------------------------------------------

// Write a function to calculate the area of a rectangle given its length and width.

// console.log(calculateRectangleArea(5, 10)); // Output: 50

// ------------------------------------------------------------

// Create a function to generate a Fibonacci sequence up to a specified number of terms.

// console.log(generateFibonacciSequence(5)); // Output: [0, 1, 1, 2, 3]

// ------------------------------------------------------------

// Write a function to check if a given year is a leap year.

// console.log(isLeapYear(2024)); // Output: true

// ------------------------------------------------------------

// Develop a function to convert a binary number to a decimal number.

// console.log(decimalToBinary(10)); // Output: '1010'

// ------------------------------------------------------------

// Create a function to reverse the order of words in a sentence.

// console.log(reverseWordsInSentence("Hello, World!")); // Output: 'World! Hello,'

// ------------------------------------------------------------

// Implement a function to check if two strings are anagrams.

// console.log(areAnagrams("listen", "silent")); // Output: true

// ------------------------------------------------------------

// Write a function to check if a number is a power of two.

// console.log(isPowerOfTwo(16)); // Output: true

// ------------------------------------------------------------

// Develop a function to rotate elements in an array to the left by a given number of positions.

// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]

// ------------------------------------------------------------

// Create a function to find the difference between two arrays.

// console.log(findArrayDifference([1, 2, 3], [2, 3, 4])); // Output: [1]

// ------------------------------------------------------------

// Implement a function to calculate the square root of a given number.

// console.log(calculateSquareRoot(25)); // Output: 5

// ------------------------------------------------------------

// Write a function to generate a random password of a specified length.

// console.log(generateRandomPassword(8)); // Output: Random password

// ------------------------------------------------------------

// Develop a function to find the union of two arrays.

// console.log(findArrayUnion([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]

// ------------------------------------------------------------

// Create a function to check if a string is a valid email address.

// console.log(isValidEmailAddress("user@example.com")); // Output: true

// ------------------------------------------------------------

// Create a function to find the maximum sum of subarray of a given array.

// console.log(maxSumSubarray([1, -2, 3, 4, -1, 2, 1, -5, 4])); // Output: 7

// ------------------------------------------------------------

// Implement a function to convert a decimal number to binary.

// console.log(decimalToBinary(10)); // Output: '1010'

// ------------------------------------------------------------

// Write a function to check if a given array is sorted in ascending order.

// console.log(isArraySortedAscending([1, 2, 3, 4])); // Output: true

// ------------------------------------------------------------

// Create a function to check if a string contains only digits.

// console.log(containsOnlyDigits("123")); // Output: true

// ------------------------------------------------------------

// Implement a function to generate a random color code.

// console.log(generateRandomColorCode()); // Output: Random color code

// ------------------------------------------------------------

// Develop a function to check if a given string is a valid palindrome sentence.

// console.log(isValidPalindromeSentence("A man, a plan, a canal, Panama!")); // Output: true

// ------------------------------------------------------------

// Create a function to find the mode of an array.

// console.log(findArrayMode([1, 2, 2, 3, 3, 4])); // Output: [2, 3]

// ------------------------------------------------------------

// Implement a function to convert a Roman numeral to an integer.

// console.log(romanToInteger("XIV")); // Output: 14

// ------------------------------------------------------------

// Write a function to check if a given string is a valid URL.

// console.log(isValidURL("https://www.example.com")); // Output: true

// ------------------------------------------------------------

// Develop a function to find the greatest common divisor (GCD) of two numbers.

// console.log(findGCD(24, 36)); // Output: 12

// ------------------------------------------------------------

// Create a function to reverse the bits of a given number.

// console.log(reverseBits(5)); // Output: 2684354560

// ------------------------------------------------------------

// Implement a function to perform basic string compression using the counts of repeated characters.

// console.log(compressString("aaabbbccc")); // Output: 'a3b3c3'

// ------------------------------------------------------------

// Write a function to convert a decimal number to hexadecimal.

// console.log(decimalToHexadecimal(255)); // Output: 'FF'

// ------------------------------------------------------------

// Create a function to check if a number is a palindrome.

// console.log(isNumberPalindrome(121)); // Output: true

// ------------------------------------------------------------

// Implement a function to calculate the sum of digits in a given number.

// console.log(calculateSumOfDigits(123)); // Output: 6

// ------------------------------------------------------------

// Write a function to find the least common multiple (LCM) of two numbers.

// console.log(findLCM(12, 18)); // Output: 36

// ------------------------------------------------------------

// Develop a function to find the longest common prefix of an array of strings.

// console.log(findLongestCommonPrefix(["apple", "apricot", "apex"])); // Output: 'ap'

// ------------------------------------------------------------

// Create a function to find the missing number in an array of consecutive numbers.

// console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4

// ------------------------------------------------------------

// Implement a function to check if a given string is an integer or a floating-point number.

// console.log(isValidNumber("123.45")); // Output: true

// ------------------------------------------------------------

// Write a function to check if a given number is a Fibonacci number.

// console.log(isFibonacciNumber(21)); // Output: true

// ------------------------------------------------------------
