// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll

// Write your solution below:
// First solution
// const tshirtSorter = (string) => {
//   let sorted = [];
//   let numS = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "s") {
//       sorted.unshift(string[i]);
//       numS++;
//     } else if (string[i] === "m") {
//       sorted.splice(numS, 0, string[i]);
//     } else if (string[i] === "l") {
//       sorted.splice(i, 0, string[i]);
//     }
//   }
//   return sorted.join("");
// };

// // Second Solution
// const tshirtSorter = (string) => {
//   let arr = string.split("");
//   let smalls = arr.map((num) => (num === "s" ? "s" : []));
//   let mediums = arr.map((num) => (num === "m" ? "m" : []));
//   let larges = arr.map((num) => (num === "l" ? "l" : []));
//   return smalls.join("") + mediums.join("") + larges.join("");
// };

// Ultimate (albeit lucky) solution

const sizes = {
  s: 1,
  m: 2,
  l: 3,
};
const tshirtSorter = (string) => string.split("").sort((a, b) => sizes[a] - sizes[b]).reverse().join("");

console.log(tshirtSorter("lms"), "should be sml");
console.log(tshirtSorter("smllms"), "should be ssmmll");
console.log(tshirtSorter("slsmmsllsmsmlmsls"), "should be sssssssmmmmmlllll");
