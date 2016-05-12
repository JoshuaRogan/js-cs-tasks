'use strict';

//========================== Spacify ==========================//
function spacify(str){
    return str.split('').join(' '); 
}


String.prototype.spacify = function(){
    return this.split('').join(' '); 
}


//========================== Log ==========================//
function log(){
    console.log.apply(console, arguments); 
}

function log(){
    let args = Array.prototype.slice.call(arguments);
    args.unshift('(app)');
    console.log.apply(console, args); 
}

//========================== Context ==========================//
let User = {
    count: 1, 

    getCount: function(){
        return this.count; 
    }
};

console.log(User.getCount());           // > 1
let func = User.getCount;
console.log(func());                    // > undefined (this is window)
func = User.getCount.bind(User);
console.log(func());                    // > 1


//========================== Shim Bind ==========================//
Function.prototype.bind = Function.prototype.bind || function(context){
    let self = this; 

    return function(){
        return self.apply(context, arguments);
    };
};

