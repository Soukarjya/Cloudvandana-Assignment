function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
  
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
 
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "Lionel Messi is the Greatest of all time in Football";
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log(reversedSentence); 
  