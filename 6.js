function countWords(inputWords) {
  return inputWords.reduce((countMap, word) => {
    const count = countMap[word] || 0;
    return Object.assign(countMap, {
      [word]: count + 1,
    });
  }, {});
}

module.exports = countWords;
