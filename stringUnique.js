/**
 * @fileoverview Algorithm to determine if a string has all unique characters.  
 *    
 *     
 *     
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */

'use strict';

function isUniqueString(string){
    let charMap = new Map(); 

    for(let char of string.split('')){
        if(!charMap.has(char)) charMap.set(char, 1); 
        else return false;
    }

    return true; 
}

console.log(isUniqueString('motherfucker'));
console.log(isUniqueString('asdFDf'));