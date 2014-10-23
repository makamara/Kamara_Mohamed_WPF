/**
 * Created by Mohamed A. Kamara
 * Circumference Function
 * October 23, 2014
 */
var varRad = Number(prompt("Enter radius of circle  :"));//Input radius of the circle

//Validate data entry for numeric value only.

if (varRad>0){
    var varCum = calCum(varRad); //Invoke function to calculate circumference

    console.log("Circumference of the circle is " + varCum + " Radius :" + varRad); //print result to the console
} else{

    alert("Input error! Numeric values only....."); //alert user of input error
}


function calCum(R){
    return 2 * (R * 3.14); //calculate circumference using C = 2 * R * Pi(3.14)
}