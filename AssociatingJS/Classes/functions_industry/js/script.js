/**
 * Created by Mohamed A. Kamara
 * Functions Assignment
 *
 * October 23, 2014
 *
 * Function to calculate the annual bonuses of the sales force based on annual sales.
 */

//
var yrIncome = Number((prompt("What is your annual gross income?  "))); //Input for annual gross income/salary

var yrSales =Number((prompt("What is  your annual gross sales up to date?")));//Input for annual gross sales

var yrBonus = calBonus(yrIncome, yrSales); // Invoke function to calculate bonus

if (yrIncome>0){ //annual income must be greater than zero

    console.log("Your annual gross income + bonus is :" + yrBonus);//print annual income including bonuses

}else {
    console.log("Input error! annual gross income is required....Retry!")
}



function calBonus(I, S){

    if (S < 50000 && S>0){

        return I + (S * 0.05);  //5% annual bonus if annual sales is under 50,000

    } else if  (S<100000 && S>50000){

        return I + (S * 0.1); //10% annual bonus if annual sales is between 50,000 and 99,999

    } else if (S>=100000){

        return I + (S * 0.15); //15% annual bonus if annual sales is 100,000 or more.
    } else {
        return I;//return annual income if no annual sales
    }
}

