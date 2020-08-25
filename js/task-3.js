function findLongestWord(string = "") {
  //   // Write code under this line
  let result = string.split(" ");
  let resultLength = 0;
  let LongestWord = "";
  for (let i = 0; i < result.length; i += 1) {
    if (result[i].length > resultLength) {
      resultLength = result[i].length;
      LongestWord = result[i];
    }
  }
  return LongestWord;
}

// function findLongestWord(string = "") {
//   // Write code under this line
//   const stringSplit = string.split(" ");
//   let longestWord = "";

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
