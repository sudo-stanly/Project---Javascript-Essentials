/* 2.0.3 Declaring Variables */ 
//var height;
//console.log(height); // -> undefined
//console.log(weight); // Uncaught ReferenceError: weight is not defined

//let height;
//console.log(height) //undefined

//var height;
//var height;
//console.log(height); //undefined

//let height;
//let height;
//console.log(height); //-> uncaught SyntaxError Identifier 'height' has already been declared.


/* 2.0.4 Initializing Variables */ 
//let height =180;
//let anotherHeight = height;
//let weight;
//console.log(height); // -> 180
//console.log(anotherHeight); // -> 180
//weight = 70;
//console.log(weight); // -> 80

//let height = 180;
//console.log(height); //-> 180
//console.log("height"); // -> height


/* 2.0.5 Declarations and strict mode */ 
//height = 180;
//console.log(height); // -> 180

//"use strict";
//height = 180;
//console.log(height); //Uncaught ReferenceError: height is not defined.


/* 2.0.6 Changing Variable Values */
//let steps = 100;
//console.log(steps); // -> 100
//steps = 120; // -> 120
//console.log(steps);
//steps = steps + 200;
//console.log(steps); // -> 320

// let greeting = "Hello";
// let counter = 100;
    /*
        greeting variable is initiated with a value of the string type while counter is initiated with a value of the number type.

        making small change in the contents of the greeting variable.
    */ 
//console.log(greeting);// Hello
//greeting = 1;
//console.log(greeting) // -> 1

//greeting = "Hello!";
//greeting = greeting+counter;
//console.log(greeting); //-> Hello!100
    /*
        greeting is interpreted as a type of string and counter will be treated as a character string which becomes "100", 100 is interpreted as a number but "100" is considered a String
    */ 



/* 2.0.7 Constants */

// const greeting; //must be initialized or it will cause an error. -> Uncaught SyntaxError : Missing initializer in const declaration.
// greeting = "Hello"; //remember we cannot modify a const variable after declaring it.

//const greeting = "Hello!";
//greeting = "Hi!"; // -> Uncaught TypeError: Assignment to constant variable
//console.log(greeting);



/* 2.0.8 Scope */ 

//let counter; //global scope
//console.log(counter); // -> undefined //no initialization
//{
    //counter = 1; //reassigned with a new value
    //console.log(counter); // -> 1
//}
//counter = counter + 1; // scoped out of the code block and added a new value
//console.log(counter); // -> 2

//let counter;
//console.log(counter); // -> undefined //no initialization
//{ //nested blocks
    //counter = 1; //reassigned variable
    //{
        //console.log(counter); // -> 1 //displayed new value only inside this scope
    //}
//}
//counter = counter + 1; // added new value after reassigned value inside of the code block
//console.log(counter); // -> 2


// Declaring a variable inside of a code block and displaying it.
//let height = 180; //GLobal scope variable
//{
    //let weight = 70; //local variable inside of code block
    //console.log(height); // -> 180
    //console.log(weight); // -> 70
//} 
//console.log(height); // -> 180
//console.log(weight); // -> undefined SyntaxError: weight is undefined


//let height = 200;
//{
    //let weight = 100;
    //{
        //let info = "tall";
        //console.log(height); // -> 200
        //console.log(weight); // -> 100
        //console.log(info); // -> tall
    //}
    //console.log(height); // -> 200
    //console.log(weight); // -> 100
    //console.log(info); // -> uncaught ReferenceError: info is not defined
//}
/*
    height is a Global variable, while weight is accessible only inside the first code block scope,
    while info is only visible inside the nested block scope.
*/ 

//var height = 180;
//{
    //var weight = 70;
    //console.log(height); // -> 180
    //console.log(weight); // -> 70
//}
//console.log(height); // -> 180
//console.log(weight); // ->  70

/*
    declaring with a variable with var everything will be Globally scoped.
*/ 



/* 2.0.9 Functions */
/*
    Functions are used when there is a specific task to be performed and be used many times.
*/  

// function testFunction(){
//     console.log("Hello");
//     console.log("World");
// }
/*
    defining a function the instructions contained in teh function are not executed,
    to execute the function, you must call it independently, using its name.
*/ 



/* 2.0.10 var keyword */
/*
    by declaring a variable using the var keyword inside of a function, the scope
    will be limited only to the inside of that function( it's called local scope. )
    which means it will only be recognized inside of this function
*/  
// var globalGreeting = "Good";
// function testFunction()
// {
//     var localGreeting = "Morning ";
//     console.log("function: ");
//     console.log(globalGreeting);
//     console.log(localGreeting);
// }
//testFunction();

//console.log("main program");
//console.log(globalGreeting);
//console.log(localGreeting); // -> uncaught ReferenceError: localGreeting is not defined



/* 2.0.11 Variable shadowing */

/*
    variable shadowing is when a global and local variable is defined with the same name.
    Note: this is not recommended.
*/ 

// example without variable shadowing:
//let counter = 100;
//console.log(counter); // -> 100
//{
    //counter = 200;
    //console.log(counter); // -> 200
//}
//console.log(counter); // -> 200

// example with variable shadowing:
// let counter = 100;
// console.log(counter); // -> 100
// {
//     let counter = 200;
//     console.log(counter); // -> 200
// }
//console.log(counter); // -> 100
/*
    the local variable remains the same only inside the code block,
    while the global variable counter is unchanged,
    due to redeclaration of both variables with the same name.
*/ 

/*
    Shadowing is also present in variable declarations using var, and this local
    scope is limited not by the program block, but by the function block
*/ 
//var counter = 100;
//function testFunction()
//{
    //var counter = 200;
    //console.log(counter);
//}
//console.log(counter); // -> 100
//testFunction(); // -> 200
//console.log(counter); // 0> 100




