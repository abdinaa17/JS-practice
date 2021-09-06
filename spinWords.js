// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.

function spinWords(str) {
    let strArr = str.split(" ");
    let output = strArr.map((word) => {
      if(word.length > 4){
        return word.split('').reverse().join('')
      } else {
        return word
      }

    })
    
    return output.join(' ')
}

console.log(spinWords('Matter is anything that occupies space and has mass'))
