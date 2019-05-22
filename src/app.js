class Trimmer {
  leading(word){
    if(this.shouldCheck(word)){
      let leadingPuntuation = '';
      for(let i = 0; i < word.length; i++){
        if(this.isNonAlphanumericChar(word[i]))
          leadingPuntuation += word[i];
        else
          return leadingPuntuation;
      }
    }
    return null;
  }

  trailing(word){
    if(this.shouldCheck(word)){
      let trailingPunctuation = [];
      for(let i = word.length - 1; i > 0; i--){
        if(this.isNonAlphanumericChar(word[i]))
          trailingPunctuation.unshift(word[i])
        else
          return trailingPunctuation.join("")
      }
    }
    return null;
  }

  strip(word){
    if(this.shouldCheck(word)){
      let pre = this.leading(word);
      let post = this.trailing(word);
      return word.substring(pre.length, word.length - post.length);
    }
    return word;
  }

  // private
  isNonAlphanumericChar(str){
    return /\W/.test(str);
  }

  shouldCheck(word){
    return this.isNonAlphanumericChar(word);
  }
}

module.exports = Trimmer;