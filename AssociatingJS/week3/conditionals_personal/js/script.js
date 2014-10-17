/**
 * Created by PPC-1 on 10/16/14.
 * Mohamed A. Kamara
 * Personal Conditionals
 * October 16, 2014
 *
 * The script alerts user on the arrival/departure of the non-stop bus based on time
 */
var cTime = Number(prompt("Please enter current time in hour (hh) : "));

if (cTime<=9 && cTime>=7){
    alert("Non-stop bus available to Downtown! ");

} else if (cTime<=17 && cTime>=15) {
    alert("Non-stop bus available from downtown!");
    }

    else { alert("Non-stop are off the road right now!")


}
