const lineReader = require('line-reader')

const charToInt = char => char.charCodeAt(0) - 97
const newNode = () => ({ value: false, nodes: Array(26).fill(null) })

function put(root, word, depth = 0) {
  if (root === null) {
    root = newNode()
  }
  if (depth === word.length) {
    root.value = true
    return root
  }
  const index = charToInt(word[depth])
  root.nodes[index] = put(root.nodes[index], word, depth+1)
  return root
}

function get(root, word, depth = 0) {
  if (root === null) { return null }
  if (depth === word.length) { return root }

  const index = charToInt(word[depth])
  return get(root.nodes[index], word, depth+1)
}

class Dictionary {
  constructor() {
    this.root = null
    lineReader.eachLine('./bin/words_alpha.txt', line => {
      this.root = put(this.root, line)
    })
  }

  isValidPrefix(prefix) {
    return get(this.root, prefix) != null
  }

  isValidWord(word) {
    const node = get(this.root, word)
    return (node != null) && node.value
  }
}

module.exports = Dictionary