"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/ 

printOut("Task 1, 2 and 3");
printOut(newLine);

// Part 1/2; 
let wakeUpTime = 7; 
let actuallyWakeUpTime = 6;

  printOut("Part 1/2: ")
if (wakeUpTime === actuallyWakeUpTime) {
  printOut("I can take the bus to school.");
} else {
  printOut(" I need to take the car to school " );
}
printOut(newLine);

// Part 3; 
wakeUpTime = 7; 

printOut (" Part 3: ");
if (wakeUpTime == 7){
  printOut (" I can take the bus to school "); 
} else if (wakeUpTime == 8) {
  printOut (" I need to take the train to school "); 
} else {
  printOut (" I have to take the car to school "); 
}





printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Part 4;
printOut(" Part 4: ");
let tall = 19; 

if (tall >= 0) {
  printOut(" Tallet er positivt ");
} else {
  printOut(" Tallet er negativt ");
}

// Part 5;
printOut (" Part 5: ");
tall = 0;

if (tall > 0) {
  printOut (" Tallet er positivt ");
} else if (tall < 0) {
  printOut (" Taller er negativt ");
} else {
  printOut (" Tallet er null ");
}


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let random = Math.random() * 8;
let imageSize = 4; 
if (random > imageSize) {
  printOut (" Thank you"); 
} else {
  printOut (" Too image is too small");
}

printOut(newLine);



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let random2 = Math.random() * 8;
let imageSize2 = 4;

if (random2 > imageSize2) {
  printOut (" Thank you");
} else if (random2 >= 6){
  printOut (" Too image is too large");
  } else { 
  printOut (" Too image is too small ");
  }

printOut(newLine);




printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 

const monthList = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]; 
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName === "April" || monthName === "January" || monthName === "February" 
  || monthName === "March" || monthName === "November" || monthName === "September" 
  || monthName === "October" || monthName === "December" ){
    printOut("You must take vitamin D" ); 
} else if (monthName === "May" || monthName === "June" || monthName === "July" 
  || monthName === "August" ){
    printOut("You should not take vitamin D" );
}


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const mathIndex = monthList.indexOf(monthName);
printOut(`There are ${daysInMonth[mathIndex]} days in ${monthName}.`);


printOut(newLine);




/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList2 = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]; 

const noOfMonth2 = monthList2.length; 
const monthName2 = monthList2 [Math.floor(Math.random() * noOfMonth2)];



printOut("In " + monthName2); 

if (monthName2 === "March" || monthName2 === "May") {
  printOut("The gallery is closed for refurbishment."); 
} else if (monthName2 === "April") {
  printOut("The gallery is temporarily open in the building next door");
} else {
  printOut("The gallery is open as usual");

}



printOut(newLine);
