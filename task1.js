const findLongestWord = sentence => {
  const sentenceArr = sentence.replace(/,/g, "").split(" ");
  // console.log(sentenceArr);
  let longestWord = "";
  // for (let i = 0; i < sentenceArr.length; i++) {
  sentenceArr.map(elem => {
    // console.log(sentenceArr[i]);
    if (elem.length > longestWord.length) {
      longestWord = elem;
    } else if (elem.length = longestWord.length) {
      if (elem.match(/[aeiou]/g).length > longestWord.match(/[aeiou]/g).length) {
        longestWord = elem;
      }
    }

  })
  return longestWord;
}


console.log(findLongestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"));