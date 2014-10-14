/*
Mohamed A. Kamara
Expressions Industry
October 9, 2014
 */

//Script to calculate the Internet bandwidth annually for a small office
var totStaff = 10;
var bizDays = 20; //Business days in a month
var dBand = 1024;  //bandwidth in megabytes
var mBand= bizDays * dBand * totStaff; //monthly bandwidth for the entire office
var yBand=mBand * 12;  //Annual bandwidth in megabytes
//Convert annual bandwidth to Gigabyte
var gByte=yBand/1024;


console.log(gByte);


