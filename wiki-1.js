// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


/**
 * Determine the largest valid substring length 
 * @param  {String} S input string
 * @return {Integer}  max string length or -1 if none
 */
function solution(S) {
    var maxSubString = -1; 

    //Quick Check 
    if(isValidPassword(S)){
        return S.length;
    }

    //Iterate through all substrings
    for(var i = 0; i < S.length; i++){
        for(var j = 1; j <= S.length - i; j++){
            var str = S.substring(i, i + j); 

            if(str.length > maxSubString && isValidPassword(str)){
                maxSubString = str.length; 
            }

        }
    }

    return maxSubString;
}


/**
 * If a potential password has a uppercase letter and no 
 * digits it is valid. 
 * @param  {String} str 
 * @return {Boolean} 
 */
function isValidPassword(pass){
    if(pass.length < 1){
        return false;    
    }
    else if(hasNumber(pass)){
        return false; 
    }
    else if(!hasUppercase(pass)){
        return false;    
    }
    else{
        return true;    
    }
}

/**
 * Use a regex to determine if there is a digit
 * @param  {String} str 
 * @return {Boolean} 
 */
function hasNumber(str){
    var regex = /\d/;
    return regex.test(str);
}

/**
 * Use a regext to determine if there is a uppercase letter
 * @param  {String} str 
 * @return {Boolean} 
 */
function hasUppercase(str){
    var regex = /[A-Z]/;
    return regex.test(str); 
}
