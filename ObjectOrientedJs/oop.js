// oop model organises the software around data , or objects rather than functions or logic.
// the four pillars of oops are 
// : encapsulation , abstraction , polymorphism , inheritance

// 'this' keyword :
// this keyword refers to object that is executing the current piece of code;
// if the function that is being referenced in a method in an object this references the object itself

// if the function being referenced is a regular function thise reference the global object

// to use strict mode in js add <'use strict'> on top of the js code

// in non strict mode in node js this keyword in global scope gives an empty object

console.log(this);

// inside a function it points the global object
 
function displayThis(){
    console.log(this);
}

// inside a function of an object this points the object itself

displayThis();

let myobj = {
    name : 'abhishek',
    age : 20, 

    myfn : function (){
        console.log(this);
    }
}

myobj.myfn();


// inside a function inside a function inside an object this point the global object


let myobj2 = {
    name : 'abhishek',
    age : 20, 

    myfn : function (){
        function myfun3(){
            console.log(this);
        }

        myfun3();
    }
}

myobj2.myfn()

// IN BROWSER (non - strict)

// in browser the this keyword used in global scope returns the window object

// this keyword inside a function again gives the window object

// for function inside an object this keyword points to the object itself

// for function inside a function inside an object this keyword points to window object
