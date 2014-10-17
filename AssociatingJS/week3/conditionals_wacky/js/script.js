/**
 * Created by PPC-1 on 10/16/14.
 * Mohamed A. Kamara
 * Conditional Wacky
 *
 * The script collect age and weight of an individual and alert them of their health situation
 *
 */
var yrBirth=Number(prompt ("Enter Year of Birth: "));
var varAge=2014-yrBirth;

var varWeight=Number(prompt("Enter your weight in pounds: "));

//
if (varAge<=15 && varWeight>=150){
    alert("Too early for such weight gain.")
}