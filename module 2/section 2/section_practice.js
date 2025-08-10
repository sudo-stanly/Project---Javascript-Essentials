/*
    *2.1.11 SECTION PRACTICE
*/ 


/*
    *QUESTION 1:
    write a code that will create variables and initialize them with values of
    boolean, number, BigInt, string, and undefined types using(when possible
    literals and constructor functions).
*/ 
    // const bool = true;
    // const number = 1;
    // const Bn = 1234n;
    // const Str = "Hello";
    // const un = undefined;

    // const bool2 = Boolean(true);
    // const number2 = Number(1);
    // const Bn2 = BigInt(1234);
    // const Str2 = String("Hello");


/*

    *QUESTION 2:
    now print all the values and all types of those values using console.log
    try to use string interpolation to display the value and type at the same time
    with a single console.log call, e.g the following. FORMAT: 1000[number]

*/ 

// console.log(`${bool} [${typeof bool}]`);
// console.log(`${bool2} [${typeof bool2}]`);

// console.log(`${number} [${typeof number}]`);
// console.log(`${number2} [${typeof number2}]`);

// console.log(`${Bn} [${typeof Bn}]`);
// console.log(`${Bn2} [${typeof Bn2}]`);

// console.log(`${Str} [${typeof Str}]`);
// console.log(`${Str2} [${typeof Str2}]`);


/*

    *QUESTION 3:
    carry out a chain of conversions: create a boolean from a BigInt
    created from a number that was created from a string. Start with value
    "1234".

*/ 
// const bool3 = Boolean(BigInt(Number("1234")));
// console.log(bool3);


/*

    *QUESTION 4:
    Try adding two values of the same type and check the result type.
    try it for all primitive types.

*/ 
// const b = true + false;
// const n = 100 + 200;
// const bi = 100n + 200n;
// let str = "He" + "llo";
// let un2 = undefined + undefined;

// console.log(`${b} [${typeof b}]`);
// console.log(`${n} [${typeof n}]`);
// console.log(`${bi} [${typeof bi}]`);
// console.log(`${str} [${typeof str}]`);
// console.log(`${un2} [${typeof un2}]`);


/*

    *QUESTION 5:
    try adding two values of different types and check the results.

*/ 
// const num = 11 + "11";
// const bigStr = 100n + "Hello"
// console.log(num+"\n"+bigStr);

/*

    *QUESTION 6:
    try to modify the line const str1 = 42 + "1";
    to see the result 43(without removin the quotes around 1)

*/ 
// const str1 = 42 + + "1";
// console.log(str1);