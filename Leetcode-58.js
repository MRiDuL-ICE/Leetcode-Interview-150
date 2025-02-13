/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0,
    i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};

let s = "Hello World";

console.log(lengthOfLastWord(s));
