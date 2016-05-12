'use strict';

let cats = {
    'camera': ['bags', 'tripods', 'accesories'], 
    'electronics': ['camera', 'television'], 
    'television': ['LG', 'Sony'], 
};

let navMap = new Map(); 

function parseCategories(categories){
    for(let parent in categories){
        for(let category of parent){
            //Leaf
            if(cats[category] === undefined){
                
            }
            else{
                
            }
        }
    }
}

function dive(category){
    if(!navMap.has(category)){

    }
    else{

    }
}

parseCategories(cats); 


