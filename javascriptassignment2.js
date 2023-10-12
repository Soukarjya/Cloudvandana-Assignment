function sortArrayDescending(arr) {

    arr.sort(function(a, b) {
      return b - a; 
    });
  }
  

  const numbers = [8,6,9,4,11,21];
  sortArrayDescending(numbers);
  console.log(numbers);
  