"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const answer = 2 + 3 * (2 - 4) * 6; 
printOut(answer);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let inches = 25.4; 
let metres = 25; 
let centimetres = 34; 
let milimetres = (metres * 1000) + (centimetres * 10);  
printOut((milimetres / inches).toFixed(2));


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 3; 
const hours = 12; 
const minutes = 14;
const seconds = 45; 
let totalMinutes = days * 24 * 60 + hours * 60 + minutes + seconds / 60;
printOut(days + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds " + " = " + totalMinutes.toFixed(2) + " minutes ");
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part4minutes = 6322.52;

let part4Rest = part4minutes / (24 * 60);
const part4Days = Math.floor(part4Rest);

part4Rest = part4Rest - part4Days; 
part4Rest = part4Rest * 24;
const part4Hours = Math.floor(part4Rest);

part4Rest = part4Rest - part4Hours; 
part4Rest = part4Rest * 60; 
const part4Minutes = Math.floor(part4Rest);

part4Rest = part4Rest - part4Minutes;
part4Rest = part4Rest * 60;
const part4Seconds = Math.floor(part4Rest); 

printOut(" 6322.52 minutes is " + part4Days + " days, " + part4Hours + " hours, " + part4Minutes + " minutes and " + part4Seconds + " seconds. ");
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const dollars = 54;
const nok = 76;
const usd = 8.6;

let UsdtoNokRate = nok / usd;
let dollartoNok = dollars * UsdtoNokRate; 

let NoktoUsdRate = usd / nok;
let kronertoUsd = dollartoNok * NoktoUsdRate;


printOut(dollars + " USD = " + Math.round(dollartoNok) + " NOK " );
printOut(Math.round(dollartoNok) + " NOK = " + kronertoUsd + " USD ")
printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = " There is much between heaven and earth that we do not understand. "; 
const textlength = text.length; 

printOut( " Number of characters " + textlength);
printOut( " Character at the position 19 = " + text.charAt (19));
printOut( " Character at the position 35 = " + text.charAt (35) + " and 8 characters forward " + text.charAt (43));
printOut( " The index at which earth starts is = " + text.indexOf ("earth")); 


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(" Is 5 greater than 3 " + " = " + (5 > 3));
printOut(" Is 7 greater or equal to 7 " + " = " + (7 >= 7));
printOut(" Is a greater than b " + " = " + (" a " > " b "));
printOut(" Is 1 less than a" + " = " + (1 < " a " ));
printOut(" Is 2500 less than abcd " + " = " + (2500 < " abcd " ));
printOut(" Arne is not equal to Thomas " + " = " + (" Arne " != "Thomas "));
printOut(" 2 equals 5 " + " = " + (2 == 5));
printOut(" abcd is greater than bcd " + " = " + ("abcd " > " bcd "));

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 

printOut(Number ( "254" ));
printOut(Number ("57.23"));
printOut(Number ("25 kroner"));

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor (Math.random() * 360) + 1;

printOut(r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part10Days = 131; 

let week10 = Math.floor(part10Days / 7); 
let restdays20 = part10Days % 7;


printOut("131 days is 1 " + week10 + " weeks and " + restdays20 + " days ");
printOut(newLine);