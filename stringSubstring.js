/**
 * @fileoverview Determine if a string is a substring of another  
 *    
 *     
 *     
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */

'use strict';

//Exists in es6 so safe to add to prototype
String.prototype.contains = naiveContains;


String.prototype.eitherSubstring = function(compareTo){
    let check = this.length > compareTo.length;
    let longerString = check ? this : compareTo; 
    let shorterString = check ? compareTo : this;
    return longerString.contains(shorterString);  
};





//Naive brute force approach = O(n^2)
function naiveContains(compareTo){
    //Quick Checks
    if(this.length < compareTo.length) return false; 
    if(this.length === compareTo.length){
        if(this === compareTo) return true; 
        else return false; 
    } 

    let iterations = 0; 

    for(let i=0; i < this.length; i++){
        let tempI = i;
        for(let j=0; j < compareTo.length; j++){
            iterations++;
            console.log('comparing', this.charAt(tempI), compareTo.charAt(j));
            if(this.charAt(tempI) === compareTo.charAt(j)){
                tempI++;
                //At the end of the comparision string
                if(j === compareTo.length - 1){
                    console.log(iterations);
                    return true;
                }
            }
            else{ //end interior loop
                j = compareTo.length; 
            }
        }
    }

    console.log(iterations);
    return false;
}


//Make it faster 
function smarterContains(compareTo){
 
}




// console.log(eitherSubstring('ccat', 'cat')); 
// 
// console.log('ccat'.contains('ccatt'));
// console.log('ccat'.eitherSubstring('ccatt'));

// console.log(eitherSubstring('mother', 'other')); 

// console.log('123456789'.contains('6789'));


// console.log('ccat'.contains('cat'));
// console.log('ccat'.contains('cc'));
// console.log('ccat'.contains('nope'));
// console.log('ccat'.contains('nopecat'));
// console.log('nopecat'.contains('cat'));


// console.log('cat'.contains('cat'));
