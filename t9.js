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

function predictWord(input) {
  const t9 = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const path = input.split('').map(n => t9[n-2])
  const possibleWords = []
  collectWords(path, possibleWords)
  return possibleWords
}

module.exports = { predictWord }