/**
 * @fileoverview Use a very simple compression converting sequences of same characters to 
 * the number of occurences. 
 *     Ex:  aaaaabbbbbccddde = a5b5c2d3e
 *     
 *     
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */

'use strict';

/**
 * Return a either a shorter compressed string (a2b3b2a1) or the original string
 *
 * Runtime: O(n) 
 * @param  {String} string any input string
 * @return {String}        shorter compressed or original string 
 */
function compressStringFirst(string){
    //contains an array of objects of {char: 'c', count: 4}
    let stringCountsArray = []; 


    let currentCount = 1; 
    let lastChar = false; 

    for(let char of string.split('')){
        //New char found
        if(lastChar !== char){
            //Add last char to string counts obj
            if(lastChar !== false){
                stringCountsArray.push({char: lastChar, count: currentCount}); 
            }
            currentCount = 1;
            lastChar = char;
        }
        else{
            currentCount++;
        }
    }

    //Create a compressed string
    let compressedString = createStringFromCountArray(stringCountsArray);

    //Only return the shorter string
    return (compressedString.length < string.length) ? compressedString : string;
}


//Helper function to create the string from the string counts objects
function createStringFromCountArray(stringCountsArray){
    let outputString = ''; 
    for(let countObj of stringCountsArray){
        outputString += countObj.char + countObj.count; 
    }
    return outputString; 
}


console.log(compressStringFirst('aaAAAabbcdefff'));
console.log(compressStringFirst('aaAAAabbcdedddddddassdfasdsssssssssssssssfff'));