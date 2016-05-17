var currentPos = -1; 
var time = -1; 

var stones = [];
var maxDistance = -1; 
var maxTime = -1; 

function solution(A, D) {
    stones = A;
    maxDistance = D;
    maxTime = Math.max.apply(null, stones);
    
    while(time <= maxTime && currentPos + maxDistance < stones.length){
        nextLocation(maxDistance); 
    }

    if(time <= maxTime){
        return time
    }
    else{
        return -1; //No solution 
    }
    
}


/**
 * Try to jump to the farthest location possible then recusively checking
 * shorter distances 
 * 
 * @param  {number} dist maximum distance it can jump 
 */
function nextLocation(dist){   
    if(dist === 0){
        time++;
        return currentPos; 
    }
    else{
        if(stones[currentPos + dist] !== -1 && stones[currentPos + dist] <= time){
            currentPos = currentPos + dist;
            return currentPos;
        }
        else{
            nextLocation(dist - 1); 
        }
    }
}


