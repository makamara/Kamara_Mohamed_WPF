/**
 * Created by Mohamed A. Kamara
 * Functions Assignment
 *
 *October 23, 2014
 */

//Function to calculate annual savings using CubCard


var vYes = Number(prompt("CubCard Member? Press 1 for Yes 2 for No")); // Check if member of CubCard

var varGas = Number(prompt("What is your estimated weekly fuel consumption in dollar$?"));//Input for weekly gas consumption

var varSavings = yrGas(vYes,varGas); //Invoke function to calculate savings.


if (vYes=1 && varGas>0) {  //test if CubCard member

    console.log("Your annual savings as a CubCard member is " + varSavings); //print to console savings

} else if (vYes=2 && varGas>=0) {

    console.log("Savings for CubCard members only. Sign up Now! ");
}


function yrGas(y, wGas) {

    if (y==1 && wGas > 0) { //CubCard member

        return wGas * 52 * 0.05; //calculate annual discount of 5% if CubCard member.

    } else if (y==2 && wGas >=0){

        return 0;

    }

}
