const lineReader = require('line-reader')

class WordRanker {
  constructor() {
    this.wordsRanking = new Map()
    let i = 1
    lineReader.eachLine('./bin/google-10000-english-no-swears.txt', line => {
      this.wordsRanking.set(line, i++)
    })
  }

  rank(word) {
    return this.wordsRanking.get(word) || Number.MAX_VALUE
  }
}

module.exports = WordRanker