/**
 * Created by PPC-1 on 10/16/14.
 * Mohamed A. Kamara
 * Industry Conditionals
 *
 * This script classify a professional based on years of experience.
 */
//years of work experience
var yrExp = Number(prompt("How many years of experience you have in your industry? "));
//Classify based on input
if (yrExp<=3 && yrExp>0){
    alert("You are an entry-level professional.");
}
if (yrExp<=5 && yrExp>3){
    alert("You are a level 2 professional.");
}

if (yrExp<=10 && yrExp>5){
    alert("You are a mid-level professional.");
}
if (yrExp<=15 && yrExp>10){
    alert("You are a senior-level professional.");
}