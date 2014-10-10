/**
Mohamed A. Kamara
Expressions Industry
October 9, 2014
 */
//Script to calculate the Internet bandwidth annually for a small office
var totStaff = 10;
var bizDays = 20; //Business days in a month
var dailyBandw = 1024;  //bandwidth in megabytes
var monthBandw = bizDays * dailyBandw * totStaff; //monthly bandwidth for the entire office
var yearlyBandw=monthBandw * 12;  //Annual bandwidth in megabytes
//Convert annual bandwidth to Gigabyte
var gigBandw=yearlyBandw/1024;

//Print the annual Internet bandwidth
//Alert("The annual Internet consumption for an office of "+totStaff +"is "+gigBandw +" Gigabytes");
console.log (gigBandw);


