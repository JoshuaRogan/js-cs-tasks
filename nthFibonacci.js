/**
 * @fileoverview Various solutions to generate the nth Fibonacci number. 
 *     The real most efficient is the matrix based but is most likely.
 *     Example Sequence: 
 *         [1,1,2,3,5,8,13,21,34,55,89,144] or [0,1,1,2,3,5,8,13,21,34,55,89,177] --USING THIS FORM--
 *     
 * @author JoshJRogan@gmail.com (Josh Rogan)
 */

'use strict';

/**
 * 
 * way to complicated for an interview question. 
 *
 * 
 * 
 * 
 */

/**
 * Recursive approach to generating the nth Fibonacci number 
 *
 * Base Case: n <= 1
 *     n = 0 -> return 0 
 *     n = 1 -> return 1 
 * Recursive Case: n > 1 
 *     return  fib(n-2) + fib(n-1) //last two fib numbers  
 * 
 * @param  {Integer} n 
 * @return {Integer}   the nth Fibonacci number 
 */
function recusriveNthFibonacci(n){

    if (n === 0) return 0; 
    else if (n === 1) return 1;
    else if (n < 1){
        return -1; //Throw Error 
    }

    //Setup as a tail call 
    return recusriveNthFibonacci(n-2) + recusriveNthFibonacci(n-1);
}



/**
 * Iterative approach to generating the nth Fibonacci number.
 * Iterative should be faster than recursion.
 * 
 * @param  {Integer} n 
 * @return {[type]}   [description]
 */
function iterativeNthFibnoacci(n){
    if(n < 0) return -1; //Throw error

    if(n == 0) return 0; 
    let last = 1, current = 1;

    for(let i = 3; i <= n; i++){ //Staring at three
        let lastTwo = last + current;
        last = current;
        current = lastTwo; 
    }

    return current; 
}


/**
 * Compare the time to solve each the iterative vs recursive running one after the other 
 * so they aren't competing.
 * 
 * @param  {Integer} upTo compute up to this many 
 */
function compare(upTo, iterativeOnly){
    //Timing vars 
    let recursiveTime = 0;
    let iterativeTime = 0;
    let recStart = new Date().getTime();
    let itrStart = new Date().getTime();

    for(let i=0; i<upTo; i++){
        let oneRunStartRec = new Date().getTime();
        let recResult = recusriveNthFibonacci(i); 
        let recOneRunTime = new Date().getTime() - oneRunStartRec;
        recursiveTime += recOneRunTime;

        let oneRunStartIter = new Date().getTime();
        let iterResult = iterativeNthFibnoacci(i); 
        let iterOneRunTime = new Date().getTime() - oneRunStartIter;
        iterativeTime += iterOneRunTime;

        console.log(`[REC] Fibonacci number ${i} is ${recResult} in ${recOneRunTime}ms.`);
        console.log(`[ITR] Fibonacci number ${i} is ${iterResult} in ${iterOneRunTime}ms.`);
    }

    console.log('-------------------------TOTALS-------------------------');
    console.log(`Recursive approach took ${recursiveTime}ms`);
    console.log(`Iterative approach took ${iterativeTime}ms`);
    console.log(`Difference (Rec - Intr) =  ${recursiveTime - iterativeTime}ms`);
}

let args = process.argv.slice(2);
(args[0] === undefined) ? compare(20) : compare(args[0]);
