/**
 * Created by Mohamed A. Kamara
 * Function Worksheet
 *
 * October 23, 2014
 */

var varWeight = Number(prompt("Enter weight of animal in pounds____:"));

var varSting = 8.666666667;

//validate data input

if (varWeight>0){

    var BeeSting = varSting * varWeight; //calculate number of bee sting

    console.log("It takes "+ BeeSting +" bee stings to kill this animal."); //output result to the screen

} else{

    alert("Input error! Verify the weight of the animal"); //
}

function calSting(s){

    return s * varSting; //Number of Bee Sting
}