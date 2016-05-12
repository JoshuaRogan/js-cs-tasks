'use strict';
//========================== For Of (Iterable) ==========================//
let ofIterable = [1, 2, 3]; 
ofIterable = 'Can be a string';
ofIterable = new Map([["a", 1], ["b", 2], ["c", 3]]);
ofIterable = new Set([1, 1, 2, 2, 3, 3]);
ofIterable = document.querySelectorAll("article > p");

//Iterables
for(let value of ofIterable){
    console.log(value); 
}

//========================== For In (Object) ==========================//

//Object property iteration (not just own properties)
let inIterable = {a:1, b:2, c:3};

for(let prop in inIterable){
    let value = inIterable[prop];
    console.log(prop, value); 
}

//========================== Classes ==========================//
class Person {
    constructor(first, last){
        this.first = first; 
        this.last = last; 
        this.name = `${first} ${last}`;
    }

    get name(){
        return this.name; 
    }

    set name(newName){
        this.name = newName; 
    }

    updateDB(){

    }
}

class DeadPerson extends Person(){
    constructor(first, last){
        super(first, last);
        this.dead = true; 
    }
}

//========================== Sets & Maps ==========================//
let s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

let m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;
m.has('hello'); //True

//========================== Promises ==========================//
function timeout(t = 0){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, duration); 
    })
}

let p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})


