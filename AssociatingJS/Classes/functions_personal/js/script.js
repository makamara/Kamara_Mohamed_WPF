/*
Created by Mohamed A. Kamara
Function Personal

October 23, 2014

 */
//Calculate the utility bills for X years

var vrYear =Number(prompt("How many years have you paid utility bills? "));

if (vrYear>0 && vrYear<50){

    var bTel = Number(prompt("Enter monthly telephone bill___:"));//estimated monthly telephone/cell bill

    var bInter = Number(prompt("Enter monthly Internet bill__:"));//estimated monthly Internet bills

    var bHeat = Number(prompt("Enter monthly Heat bill__")); //estimated monthly heating cost

    var bElect =Number(prompt("Enter monthly Electricity bill__"));//estimated monthly electricity bill

    var zBills = fxBills(bTel,bInter,bHeat,bElect); //Invoke function to calculate lifetime utility bill

    console.log("Total utility bills for " + vrYear + " years is "+ zBills); //print lifetime bill to console.

} else{
    
    console.log("Input error! Year cannot be more than 50...."); //report error if yr is unrealistic...99 yrs for ex

}

function fxBills(bT, bI, bH, bE){ //function to calculate lifetime bill

    return (bT + bI + bH + bE) * (12*vrYear); //Calculate utility bills for X years.

}
