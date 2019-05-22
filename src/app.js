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
    console.log(word)
    // if(this.shouldCheck(word)){
    //   let trailingPunctuation = [];
    //   for(let i = word.length - 1; i == 0; i--){
    //     if(this.isNonAlphanumericChar(word[i]))
    //       trailingPunctuation.unshift(word[i])
    //     else
    //       return trailingPunctuation.join("");
    //   }
    // }
  }

  // private
  isNonAlphanumericChar(char){
    return /\W/.test(char);
  }

  shouldCheck(word){
    return this.isNonAlphanumericChar(word);
  }
}

module.exports = Trimmer;