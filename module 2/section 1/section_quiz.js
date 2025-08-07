/*
Question 1: 
let's play florist. Declare six letiables, 
remembering to name them according to their purpose:

the price of a single rose (8) and the number of roses you have (70)
the price of a single lily (10) and the number of lilies you have (50)
the price of a single tulip (2) and the number of tulips you have (120)


OUTPUT:
Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300

*/ 
    // let rose = 8;
    // let lily = 10;
    // let tulip = 2;

    // let roseQty = 70;
    // let lilyQty = 50;
    // let tulipQty = 120;

    // let roseVal = rose * roseQty;
    // let lilyVal = lily * lilyQty;
    // let tulipVal = tulip * tulipQty;

    // console.log("Rose - unit price: " + rose + " , quantity: " + roseQty + " value: ", roseVal);
    // console.log("Lily - unit price: " + lily + " , quantity: " + lily + " value: ", lilyVal);
    // console.log("Tulip - unit price: " + rose + " , quantity: " + tulipQty + " value: ", tulipVal);

    // let Total = roseVal + lilyVal + tulipVal;
    // console.log("Total: ", Total);

/*

Question 2: Modify the code from the previous example.
Assume that the prices of flowers will be constant 
(they will not change). Declare and initialize the remaining letiables 
in the same way as in the previous example. Display all the gathered 
information in the console. Now decrease the number of roses by 20 and 
lilies by 30.
Display all the collected information in the console again.

*/ 

const rose = 8;
const lily = 10;
const tulip = 2;

let roseQty = 70;
let lilyQty = 50;
let tulipQty = 120;

let roseVal = rose * roseQty;
let lilyVal = lily * lilyQty;
let tulipVal = tulip * tulipQty;

console.log("Rose - unit price: " + rose + " , quantity: " + roseQty + " value: ", roseVal);
console.log("Lily - unit price: " + lily + " , quantity: " + lily + " value: ", lilyVal);
console.log("Tulip - unit price: " + rose + " , quantity: " + tulipQty + " value: ", tulipVal);

let Total = roseVal + lilyVal + tulipVal;

roseQty = roseQty - 20;
lilyQty = lilyQty - 30;

roseVal = rose * roseQty;
lilyVal = lily * lilyQty;
tulipVal = tulip * tulipQty;

Total = roseVal + lilyVal + tulipVal;

console.log("Rose - unit price:", rose, ", quantity:", roseQty, ", value:", roseVal);
console.log("Lily - unit price:", lily, ", quantity:", lilyQty, ", value:", lilyVal);
console.log("Tulip - unit price:", tulip, ", quantity:", tulipQty, ", value:", tulipVal);
console.log("Total: ", Total);