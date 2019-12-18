const Dictionary = require('./dictionary')

const dictionary = new Dictionary()

function collectWords(path, words, current = '', depth = 0) {
  if (!dictionary.isValidPrefix(current)) { return }
  if (current.length == path.length) {
    words.push(current)
    return
  }
  for (const l of path[depth].split('')) {
    collectWords(path, words, current + l, depth+1)
  } 
}


function moveValidWordsToFront(possibleWords) {
  for (let i = 1; i < possibleWords.length; i++) {
    if (!dictionary.isValidWord(possibleWords[i])) { continue }

    for (let j = i; j > 0 && !dictionary.isValidWord(possibleWords[j-1]); j--) {
      const temp = possibleWords[j]
      possibleWords[j] = possibleWords[j-1]
      possibleWords[j-1] = temp
    }
  }
}

function predictWord(input) {
  const t9 = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const path = input.split('').map(n => t9[n-2])
  const possibleWords = []
  collectWords(path, possibleWords)
  moveValidWordsToFront(possibleWords)
  return possibleWords
}

module.exports = { predictWord }