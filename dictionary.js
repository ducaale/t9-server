const lineReader = require('line-reader')

const charToInt = char => char.charCodeAt(0) - 97
const newNode = () => ({ nodes: Array(26).fill(null) })

function put(root, word, depth = 0) {
  if (root === null) {
    root = newNode()
  }
  if (depth === word.length) {
    return root
  }
  const index = charToInt(word[depth])
  root.nodes[index] = put(root.nodes[index], word, depth+1)
  return root
}

function isValidPrefix(root, prefix, depth = 0) {
  if (root === null) { return false }
  if (depth === prefix.length) { return true }

  const index = charToInt(prefix[depth])
  return isValidPrefix(root.nodes[index], prefix, depth+1)
}

class Dictionary {
  constructor() {
    this.root = null
    lineReader.eachLine('./bin/words_alpha.txt', line => {
      this.root = put(this.root, line)
    })
  }

  isValidPrefix(prefix) {
    return isValidPrefix(this.root, prefix)
  }
}

module.exports = Dictionary