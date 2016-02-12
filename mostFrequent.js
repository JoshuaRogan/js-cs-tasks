'use strict';

/**
 * Return the most frequent item in the given array.  
 * @param  {Array} array Input array 
 * @return The value most repeated in the array 
 */
function mostFrequent(array){
  let currentBestIndex = -1;
  let maxValue = 0; 
  let lookup = [];
  
  array.map(x => {
    if(lookup[x] === undefined){
      lookup[x] = 1; 
    }
    else{
      lookup[x]++;
    }
    
     if(lookup[x] > maxValue){
          currentBestIndex = x;
          maxValue = lookup[x];
     }

  });
  return currentBestIndex; 
}

