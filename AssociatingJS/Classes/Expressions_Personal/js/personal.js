/** Mohamed A. Kamara
    Expressions_Personal
    October 9, 2014
 */
//Script to calculate toilet tissues for a household of 6
var dailyT = 2; //tissues used daily
var daysY = 365; //number of days
var totT = dailyT * daysY;  //Calculate yearly tissues
//Print the yearly tissues
console.log(totT);

//Calculate total cost @ $0.85 per tissue

var unitPrice = 0.85;
var totPrice = totT * unitPrice;

//Print the total cost of tissue per year
alert("The total cost of "+totT+"tissues is "+totPrice);