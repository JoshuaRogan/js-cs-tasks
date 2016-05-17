function solution(A, B, M, X, Y) {
    var elevator = new Elevator (A, B, M, X, Y); 
    return elevator.start(); 
}


function Elevator(weights, floors, numFloors, maxCapacity, maxWeight){
    this.MAX_WEIGHT = maxWeight; 
    this.NUM_FLOORS = numFloors; 
    this.MAX_CAPACITY = maxCapacity; 

    //Must be the same length 
    this.weights = weights; 
    this.floors = floors; 

    this.currentWeight = 0; 
    this.currentFloor = 0; 
    this.passengers = [];   
    this.currentCapacity = 0;   
    this.nextPassenger = 0;

    this.numberOfStops = 0; 
}


/**
 * Loop through the passenger queue. Checking the weight and capacity 
 * adding stops for each new floor, each reset, and the final return trip. 
 */
Elevator.prototype.start = function(){
    while(this.nextPassenger <= this.weights.length){
        if(this.checkCapacity(this.nextPassenger) && this.checkWeight(this.nextPassenger)){
            this.currentWeight += this.weights[this.nextPassenger];
            this.currentCapacity++;
            
            //Only add stops for unique floors
            if(this.passengers[this.floors[this.nextPassenger]] === undefined){
                this.numberOfStops++;
                this.passengers[this.floors[this.nextPassenger]] = true; 
            }

        }
        else{ //Finished dropping off passengers 
            this.numberOfStops++; //Reset trip

            this.passengers = [];
            this.currentWeight = 0;
            this.currentCapacity = 0;
        }

        this.nextPassenger++;
    }

    this.numberOfStops++; //Final stop 

    return this.numberOfStops;

};

/**
 * Can add the passenger based on the weight limit
 * @param  {index} passengerIndex index to access the next passenger data
 * @return {Boolean} 
 */
Elevator.prototype.checkWeight = function(passengerIndex){
    return this.currentWeight + this.weights[this.nextPassenger] <= this.MAX_WEIGHT;
}

/**
 * Can add the passenger based on the capcity limit
 * @param  {index} passengerIndex index to access the next passenger data
 * @return {Boolean} 
 */
Elevator.prototype.checkCapacity = function(passengerIndex){
    return this.currentCapacity < this.MAX_CAPACITY;
}