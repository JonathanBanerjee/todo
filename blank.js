// Javascript: What will the following lines do?
// alert(1 + 2 + 3);
// alert(1 + “2” + 3);
// alert(1 + 5 + “1”);

// Javascript: what is wrong with this line of code?
// const bar = [];
// console.log(typeof bar === "array");
// …and how would you correct it?
// const name = 10;
// console.log(typeof name === "number");

// fruits.forEach((element) => {
//   console.log(element);
// });

// const HTML = fruits.map((element) => {
//   //   console.log(element);
//   return `<p>${element}</p>`;
// });

// console.log(HTML);

// const filtered = fruits.filter((element) => {
//   return element.includes("a");
// });
// console.log(filtered);

// const reduced = fruits.reduce((accumulator, nextValue) => {
//   return accumulator + nextValue;
// });

// console.log(reduced);

// const fruits = ["oranges", "apples", "pairs", "blory"];

// fruits.sort((a, b) => {
//   if (a < b) {
//     console.log("moving forwards");
//     return -1;
//   }
//   if (b > a) {
//     console.log("moving backwards");
//     return 1;
//   }
//   console.log("leaving alone");
//   return 0;
// });

// console.log(fruits);

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 0);
//   console.log(4);
//   Promise.resolve().then(() => console.log(3));
// })();

// Javascript: What difference in output, if any, is there between the following snippets:
// const user = {
//   firstname: "John",
//   sayName: function () {
//     console.log(this.firstname);
//   },
// };
// user.sayName();

// const userTwo = {
//   firstname: "John",
//   sayName: () => console.log(this.firstname),
// };
// userTwo.sayName();

// for (var i = 1; i < 7; i++) {
//   console.log(i * 500);
//   setTimeout(function () {
//     console.log(i);
//   }, i * 500);
// }

// Revise Array Methods

const numbers = [3, 5, 5, 8, 49, 30, 32, 23];
const result = [];
for (let i = 0; i < numbers.length; ) {
  result[i + 0] = numbers[i + 2];
  result[i + 1] = numbers[i + 3];
  result[i + 2] = numbers[i + 0];
  result[i + 3] = numbers[i + 1];
  i += 4;
}
// console.log(result);

const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "STRAWBERRIES",
  "Bananas",
  "Raspberries",
];

const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
const rounders = [0.4, 0.34, 0.594, 40.34, 50, 4, 3.2, 30.23];

// 1. How can you obtain a new array with each element doubled?
const doubleNumbers = numbers.map((number) => {
  return number * 2;
});
// console.log(doubleNumbers);

// 2. What is the result of filtering out all odd numbers from an array?
const evens = numbers.filter((number) => {
  return number % 2 === 0;
});
// console.log(evens);

// 3. Can you produce an array with elements sorted in descending order?
function compareNumbers(a, b) {
  return b - a;
}
// const reversedNumbers = numbers.sort(compareNumbers);
// console.log(reversedNumbers);

// 4. What would be the output after finding the index of the first occurrence of a value greater than 10?
const foundNumber = numbers.findIndex((number) => {
  return number > 10;
});
// console.log(foundNumber);

// 5. Could you create a new array with each string element converted to uppercase?
const upperFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});
// console.log(upperFruits);

// 6. What is the sum of all elements in the array?
// const multiNumbers = numbers.map((number) => {
//   return number * number;
// });
// console.log(multiNumbers); //Incorrect

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// console.log(sum);

// 7. How do you get an array with elements multiplied by their indices?
const indexNumbers = numbers.map((number, index) => {
  return number * index;
});
// console.log(indexNumbers);

// 8. What would be the output after removing all elements less than 5?
const lessFive = numbers.filter((number) => {
  return number > 5;
});
// console.log(lessFive);

// 9. Can you generate a new array with the length of each string element?
const lengthFruits = fruits.map((fruit) => {
  return fruit.length;
});
// console.log(lengthFruits);

// 10. How do you obtain an array with elements sorted alphabetically?
function sortFruits(a, b) {
  return a - b;
}
// const alphaFruits = fruits.sort(sortFruits);
// console.log(alphaFruits);

// 11. What is the result of finding the index of the first negative number in the array?
// const foundNegative = negatives.findIndex((number) => {
//   return number < 0;
// });

// console.log(foundNegative);

// 12. Could you create an array with elements squared?
const squaredNumbers = numbers.map((number) => {
  return Math.pow(number, 2);
});

// console.log(squaredNumbers);

// 13. What would be the output after filtering out all elements greater than 20?
const greaterTwenty = numbers.filter((number) => {
  return number > 20;
});

// console.log(greaterTwenty);

// 14.How can you obtain a new array with elements in reverse order?
function reverseFruits(a, b) {
  return a - b;
}
// const reverseFruity = fruits.reverse(reverseFruits);
// console.log(reverseFruity);

// 15. Can you produce an array with elements multiplied by 3?
const threes = numbers.map((number) => {
  return number * 3;
});

// console.log(threes);

// 16. What is the sum of all even elements in the array?
const sumEvens = numbers.reduce((accumulator, currentValue) => {
  if (currentValue % 2 == 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);

// console.log(sumEvens);

// 17. How do you get an array with elements filtered to include only those starting with the letter 'A'?
const aFilter = fruits.filter((fruit) => {
  return fruit.charAt(0).toLowerCase() === "a";
});

// console.log(aFilter);
// 18. What would be the output after finding the index of the last occurrence of a specific value?
const lastIndex = numbers.lastIndexOf(40);

// console.log(lastIndex);

// 19. Could you create an array with elements concatenated with their indices?
const concatenatedNumbers = numbers.map((number, index) => {
  return number + "-" + index;
});

// console.log(concatenatedNumbers);

// 20. How can you obtain a new array with elements in random order?
// function randomNumbers(numbers) {
//   return numbers.sort(() => Math.random() - 0.5);
// }

// const randomArray = randomNumbers(numbers);
// console.log(randomArray);

// 21. What is the result of filtering out all elements less than or equal to 100?
const oneHundredOrLess = numbers.filter((number) => {
  return number <= 100;
});

// console.log(oneHundredOrLess);

// 22. Can you produce an array with elements rounded to the nearest integer?
const roundedNumbers = rounders.map((number) => {
  return Math.round(number);
});
// console.log(roundedNumbers);

// 23. What would be the output after finding the index of the first occurrence of a specific value?
const firstIndex = numbers.indexOf(40);
// console.log(firstIndex);

// 24. How do you get an array with elements filtered to exclude duplicates?
const filterDuplicates = numbers.filter((number, index) => {
  return numbers.indexOf(number) === index;
});

// console.log(filterDuplicates);

// 25. What is the sum of all positive elements in the array?
// const positiveNumbers = negatives.reduce((accumulator, currentValue) => {
//   if (currentValue >= 0) {
//     return accumulator + currentValue;
//   } else {
//     return accumulator;
//   }
// }, 0);

// console.log(positiveNumbers);

// 26. Could you create an array with elements divided by their indices?
const dividedIndices = numbers.map((number, index) => {
  if (index !== 0) {
    return number / index;
  } else {
    return number;
  }
});

// console.log(dividedIndices);

// 27. What would be the output after removing all elements greater than 50?
const noGreaterFifty = numbers.filter((number) => {
  return number < 50;
});
// console.log(noGreaterFifty);

// 28. Can you generate a new array with elements converted to lowercase?
const lowerFruits = fruits.map((fruit) => {
  return fruit.toLowerCase();
});
// console.log(lowerFruits);

// 29. How can you obtain a new array with elements concatenated with a specific string?
const berry = fruits.map((fruit) => {
  return fruit + " berry";
});

// console.log(berry);

// 30. What is the result of filtering out all elements divisible by 3?
const filterThree = numbers.filter((number) => {
  if (number % 3 === 0) {
    return number;
  }
});

// console.log(filterThree);

// 31. What would be the output after finding the index of the last occurrence of an even number?
// const lastIndexEven = numbers.lastIndexOf((num) => num % 2 === 0);

// Incorrect, use this method:

const lastIndexEven = numbers.reduce((acc, num, index) => {
  if (num % 2 === 0) {
    return index;
  }
  return acc;
}, -1);

// console.log(lastIndexEven);

// 33. Can you produce an array with elements squared and then halved?
const squaredAndHalved = numbers.map((number) => {
  return number ** 2 / 2;
});

// console.log(squaredAndHalved);

// 34. How do you get an array with elements filtered to include only those ending with the letter 's'?
const superS = fruits.filter((fruit) => fruit.includes("s"));
// console.log(superS);

// 35. What is the sum of all elements at odd indices in the array?

const sumOdd = numbers.reduce((accumulator, currentValue, currentIndex) => {
  if (currentIndex % 2 !== 0) {
    return accumulator + currentValue;
  } else {
    return currentValue;
  }
});

// console.log(sumOdd);

// 36. Could you create an array with elements multiplied by 2 and then added by 5?
const fiveMultiTwo = numbers.map((number) => {
  return number * 2 + 5;
});
// console.log(fiveMultiTwo);

// This can also be written as:
const fiveMultiTwoTwo = numbers.map((number) => number * 2 + 5);
// console.log(fiveMultiTwoTwo);

// 37. What would be the output after removing all elements less than 15?
const lessThanFifteen = numbers.filter((number) => {
  return number < 15;
});
// console.log(lessThanFifteen);

const lessThanFifteenTwo = numbers.filter((number) => number < 15);
// console.log(lessThanFifteenTwo);

// 38. Can you generate a new array with elements reversed in groups of two?
// Question marked as difficult and for review.

// 39. How can you obtain a new array with elements multiplied by their previous element?
const previousMulti = numbers.map((number, index) => {
  if (index === 0) {
    return number;
  } else {
    return number * numbers[index - 1];
  }
});
// console.log(previousMulti);

// 40. What is the result of filtering out all elements greater than the average of the array?
const numbersTwo = [2, 3, 4, 5, 6, 4, 7];
numbersTwo.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});
// console.log(numbersTwo[Math.round(numbersTwo.length / 2)]);

const resultAverage = numbersTwo.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// console.log(resultAverage / numbersTwo.length);

// const average =
//   numbers.reduce((accumulator, value) => accumulator, value, 0) /
//   numbers.length;

// const averageFilter = numbers.filter((number) => number <= average);
// console.log(averageFilter);

// 41. What would be the output after finding the index of the first occurrence of a prime number?
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const firstPrimeIndex = numbers.findIndex(isPrime);
// console.log(firstPrimeIndex);

// 42. Could you create an array with elements squared and then multiplied by 2?
const squaredTwo = numbers.map((number) => {
  return number ** 2 * 2;
});
// console.log(squaredTwo);

// 43. How do you get an array with elements filtered to include only those with a length greater than 5?
const filteredLengthFive = fruits.filter((fruit) => {
  if (fruit.length > 5) {
    return fruit;
  }
});
// console.log(filteredLengthFive);

// 44. What is the sum of all elements at even indices in the array?
const sumEvenIndices = numbers.reduce(
  (accumulator, currentValue, currentIndex) => {
    if (currentIndex % 2 == 0) {
      return accumulator + currentValue;
    } else {
      return currentValue;
    }
  }
);
// console.log(sumEvenIndices);

// 45. Can you produce an array with elements concatenated with their indices and then sorted alphabetically?
const indexSortAlpha = fruits
  .map((fruit, index) => {
    return fruit + index;
  })
  .sort();
// console.log(indexSortAlpha);

// 46. What would be the output after removing all elements containing the letter 'a'?
const fruitsContainsA = fruits.filter((fruit) => {
  return fruit.toLocaleLowerCase().includes("a");
});

// console.log(fruitsContainsA);

// 47. How can you obtain a new array with elements rounded to two decimal places?
const twoDecimals = rounders.map((number) => {
  // return Math.round(number).toFixed(2);

  //Making sure you get the numbers back as the correct data type:
  return Number(Math.round(number).toFixed(2));
});
// console.log(twoDecimals);

// 48. What is the result of filtering out all elements less than the median of the array?

// 49. Could you create an array with elements converted to binary representation?
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

const binary = numbers.map((number) => {
  return dec2bin(number);
});
// console.log(binary);

const negatives = [-2, -4, -6, -8, -10, -12, -14, -16, -18, -20, 20, 12];
// 50. What would be the output after finding the index of the last occurrence of a negative number?
// const lastIndexNegative = negatives.lastIndexOf(-1);
// console.log(lastIndexNegative);
// for (let i = negatives.length; i > -1; i--) {
//   // console.log(i);
//   if (negatives[i] < 0) {
//     console.log(negatives[i], i);
//     break;
//   }
// }
// 51. Can you generate a new array with elements reversed and then multiplied by 3?
// 52. How do you get an array with elements filtered to include only those divisible by both 2 and 3?
// 53. What is the sum of all elements greater than their preceding element?
// 54. Could you create an array with elements squared and then sorted in descending order?
// 55. What would be the output after removing all elements greater than 100 and less than 10?
// 56. Can you produce an array with elements concatenated with their reversed version?
// 57. How can you obtain a new array with elements rounded up to the nearest integer?
// 58. What is the result of filtering out all elements containing digits?
// 59. Could you create an array with elements converted to hexadecimal representation?
// 60. What would be the output after finding the index of the first occurrence of a perfect square?
// 61. Can you generate a new array with elements shifted to the left by one position?
// 62. How do you get an array with elements filtered to include only those containing vowels?
// 63. What is the sum of all elements less than their succeeding element?
// 64. Could you create an array with elements squared and then filtered to include only those greater than 50?
// 65. What would be the output after removing all elements equal to their index?
// 66. Can you produce an array with elements concatenated with their cubed version?
// 67. How can you obtain a new array with elements rounded down to the nearest integer?
// 68. What is the result of filtering out all elements containing special characters?
// 69. Could you create an array with elements converted to Roman numerals?
// 70. What would be the output after finding the index of the first occurrence of a palindrome?
// 71. Can you generate a new array with elements shuffled randomly?
// 72. How do you get an array with elements filtered to include only those with consecutive digits?
// 73. What is the sum of all elements when multiplied by their indices?
// 74. Could you create an array with elements squared and then filtered to exclude those less than 25?
// 75. What would be the output after removing all elements equal to their squared value?
// 76. Can you produce an array with elements concatenated with their square root?
// 77. How can you obtain a new array with elements rounded to the nearest multiple of 10?
// 78. What is the result of filtering out all elements containing repeating characters?
// 79. Could you create an array with elements converted to Morse code?
// 80. What would be the output after finding the index of the first occurrence of a Fibonacci number?
// 81. Can you generate a new array with elements rotated to the right by two positions?
// 82. How do you get an array with elements filtered to include only those with non-repeating characters?
// 83. What is the sum of all elements when multiplied by their position in descending order?
// 84. Could you create an array with elements squared and then filtered to exclude those greater than 1000?
// 85. What would be the output after removing all elements equal to the sum of their digits?
// 86. Can you produce an array with elements concatenated with their absolute difference from 10?
// 87. How can you obtain a new array with elements rounded to the nearest power of 2?
// 88. What is the result of filtering out all elements containing prime digits?
// 89. Could you create an array with elements converted to ASCII values?
// 90. What would be the output after finding the index of the first occurrence of a perfect cube?
// 91. Can you generate a new array with elements shifted to the right by three positions?
// 92. How do you get an array with elements filtered to include only those whose digits sum up to a prime number?
// 93. What is the sum of all elements when multiplied by their position plus 1?
// 94. Could you create an array with elements squared and then filtered to include only those less than the sum of their digits?
// 95. What would be the output after removing all elements equal to the sum of their prime factors?
// 96. Can you produce an array with elements concatenated with their number of divisors?
// 97. How can you obtain a new array with elements rounded to the nearest Fibonacci number?
// 98. What is the result of filtering out all elements containing a Fibonacci sequence?
// 99. Could you create an array with elements converted to their corresponding Morse code timing?
// 100. What would be the output after finding the index of the first occurrence of a perfect square followed by a prime number?
// 101. Can you generate a new array with elements rotated to the left by four positions101 .Ca

// input: An array of arrays of words and definitions
// output: Build a tree that would be used as a dictionary.
// If given this:

// 	[‘and’,‘AND_DEFINITION’]
// ]
// The resulting tree should be
// [{
// 	letter: ‘a’
// 	definition: null,
// 	children: [{
// 		letter: ‘n’,
// 		definition: null,
// 		children: [{
// 			letter: d,
// 			definition: ‘AND_DEFINITION’
// 		}]
// 	}]
// }]

const items = [
  "oranges",
  "Orange and round",
  "apples",
  "Green and round",
  "bananas",
  "Yellow and long",
  "cherries",
  "Red and round",
];

const newitems = items.filter((item, index) => {
  if (index % 2 == 0) {
    return item;
  }
});

// console.log(newitems);

const splitItems = newitems.map((item) => {
  return item.split("");
});

// console.log(splitItems);

// console.log(reducedItems);
// myResult = [];
