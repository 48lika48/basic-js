const chainMaker = {
  
  chain: [],
  
  getLength() {
    // remove line with error and write your code here
    this.chain.length;
    return this;
  },

  addLink(value) {
    // remove line with error and write your code here
    if (value === null) {
      this.chain.push(null);
    }
    else {
      this.chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    // remove line with error and write your code here
    if (isNaN (position) == false && position > 0 && this.chain.length >= position) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    else {
      this.chain = [];
      throw new Error();
    }
  },

  reverseChain() {
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },

  finishChain() {
    // remove line with error and write your code here
    let bracketEveryChain = [];
    bracketEveryChain = this.chain.map(function (item){
      return '( ' + item + ' )';
    });
    this.chain = [];
    return bracketEveryChain.join('~~')
  }
};

module.exports = chainMaker;
