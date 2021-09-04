// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.

function spinWords(string) {
  let strArr = string.split(' ');
  let output = '';
  strArr.map((word, i) => {
    if(word.length >=5) {
      strArr[i] = word.split('').reverse().join('');
    } else strArr[i] = word;

    output = strArr.join(' ')
  } )
 return output
}

console.log(spinWords('Matter is anything that occupies space and has mass'))