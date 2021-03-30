// 
class WordDictionary {
  constructor() {
    this.words = ''
  }
  
  addWord(word) {
    this.words = this.words + `-${word}-`
  }
  search(word) {
    const re = new RegExp(`-${word}-`)
    return re.test(this.words)
  }
}

const aw = new WordDictionary

aw.addWord('bad')
console.log(aw.search('b.d'))