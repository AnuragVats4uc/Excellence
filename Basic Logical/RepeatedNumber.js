const findRepeated = (arr) => {
    let sorted_arr = arr.slice().sort(); 
   
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }
  
  let Repeated = [1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  console.log(`The most repeated element is ${findRepeated(Repeated)}`);