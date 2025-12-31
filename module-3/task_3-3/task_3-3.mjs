"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function NorwegianDate() {
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

    let formatted;
    try {
        formatted = new Intl.DateTimeFormat("no-NB", options).format(today);
    } catch (error) {
        formatted = today.toLocaleDateString("no-NB", options);
    }

    if (typeof formatted === "string" && formatted.length > 0) {
        formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }

    return formatted; 
}

printOut(NorwegianDate());
printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 

function getTodayDateObject () {
    return new Date (); 
}

function daysUntil2XKO (todayDate) {
    // release date: 14 May 2025 (use an ISO date string)
    const releaseDate = new Date("2025-05-14");
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = releaseDate.getTime() - todayDate.getTime(); 


    return Math.ceil(diffInTime / oneDay); 
}

function show2XKOCountdown () {
    const todayDate = getTodayDateObject ();
    const prettyDate = NorwegianDate ();
    const daysLeft = daysUntil2XKO (todayDate);

    printOut (`Dagens dato er ${prettyDate}`);

    if (daysLeft > 0) {
        printOut (`Det er bare ${daysLeft} dager igjen til 2XKO slippes!`);
    } else if (daysLeft === 0) {
        printOut (`2XKO slippes i dag!`);
    } else { 
        printOut (`2XKO er allerede sluppet!`);
    }

}
printOut (show2XKOCountdown ());
printOut(newLine);



printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function circle () {
    const radius = Math.floor(Math.random() * 10) + 1; 
    printOut (`Radius: ${radius} meter`);

    const diameter = 2 * radius;
    printOut (`Diameter: ${diameter} meter`); 

    const circumference = 2 * Math.PI * radius;
    printOut (`Circumference: ${circumference} meter`); 

    const area = Math.PI * radius * radius;
    printOut (`Area: ${area} square meter`);
}
circle (); 
printOut(newLine);



printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rectangle () {
    const width = Math.floor(Math.random() * 20) + 1;
    const height = width / 2; 
    printOut (`Width: ${width} meter and height: ${height} meter`)

    const circumference = 2 * (width + height);
    printOut (`Circumference: ${circumference} meter`);

    const area = width * height; 
    printOut (`Area: ${area} square meter`); 

    const cubic = width * height * 0.10; 
    printOut (`We are going to need ${cubic} cubic meters of concrete`); 
}
rectangle (); 

printOut(newLine);



printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ETempType = { 
    Kelvin: 1,
    Celsius: 2,
    Fahrenheit: 3,
}

function Part5ConvertTemp (aTemp, aTempType){
    let kelvin = 0, celsius = 0 , fahrenheit = 0;
    let tempTypeName = "";

    switch (aTempType){
        case ETempType.Kelvin:
            kelvin = aTemp;
            celsius = kelvin - 273.15;
            fahrenheit = (kelvin - 273.15) * 9/5 + 32;
            tempTypeName = "Kelvin";
        break;
        case ETempType.Celsius: 
            celsius = aTemp; 
            kelvin = celsius + 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            tempTypeName = "Celsius";
        break;
        case ETempType.Fahrenheit:
            fahrenheit = aTemp;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            tempTypeName = "Fahrenheit";
        break;
    }
    printOut(`Convert from ${aTemp} ${tempTypeName}:`);
    printOut(`Kelvin: ${kelvin.toFixed(0)}`);
    printOut(`Celsius: ${celsius.toFixed(0)}`);
    printOut(`Fahrenheit: ${fahrenheit.toFixed(0)}`);
    printOut(" ");

}

Part5ConvertTemp(300, ETempType.Kelvin);
Part5ConvertTemp(26.85, ETempType.Celsius);
Part5ConvertTemp(80.33, ETempType.Fahrenheit);


printOut(newLine);




printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// formula: net = (100 * gross) / (vat + 100) 
// normal = 25%, food = 15%, hotel, transport, and cinema = 10% 

function Part6Calculate (aGrossAmount, aTaxGroup){
    const taxGroup = aTaxGroup.toLowerCase(); 
    let taxRate = 0; 
    switch (taxGroup){
        case "normal":
            break;
        case "food": 
            break; 
        case "hotel": 
        case "transport": 
        case "cinema":
            taxRate = 10;
            break;  
        default: 
            printOut("Error: Unknown tax group!"); 
            return; 
    }
    const netAmount = (100 * aGrossAmount) / (taxRate + 100); 
    printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
    printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
    printOut(`Net amount: ${netAmount.toFixed(2)}`); 
    printOut(" ");
}

Part6Calculate (100, "Normal");
Part6Calculate (100, "Food");
Part6Calculate (100, "Hotel");
Part6Calculate (100, "Transport");
Part6Calculate (100, "Cinema");
Part6Calculate (100, "Car");


printOut(newLine);



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function calculateSpeed (distance, time, speed) { 
    let missing = [distance, time, speed].filter (x => x === undefined).length; 

if (missing > 1) { 
    printOut ("NaN"); 
    return NaN; 
    } else if (speed === undefined) {
    speed = distance / time; 
    printOut ("Speed is " + speed); 
    return speed; 

} else if (time === undefined) {
    time = distance / speed; 
    printOut ("Time is " + time); 
    return time; 
} else if (distance === undefined) {
    distance = speed * time; 
    printOut ("Distance is " + distance); 
    return distance; 
}

printOut ("NaN"); 
return NaN; 
}

calculateSpeed (100, 2); 
calculateSpeed (100, undefined, 50); 
calculateSpeed (undefined, 2, 50); 
calculateSpeed (100); 

printOut(newLine);



printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printAlignedText() {
    const text = "This is a text";
    const width = 24; // total space inside the quotes

    const leftAligned  = '"' + text.padEnd(width, ' ') + '"';
    const rightAligned = '"' + text.padStart(width, ' ') + '"';

    printOut(leftAligned);
    printOut(newLine);
    printOut(rightAligned);
}

printAlignedText();


printOut(newLine);



printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testConsecutivePartitions(totalLines = 200) {
    let current = 1; 
    for (let line = 1; line <= totalLines; line++) {
        const leftCount = line + 1; 
        const rightCount = line; 

        let leftSum = 0;
        for (let i = 0; i < leftCount; i++) leftSum += current + i; 

        let rightSum = 0; 
        for (let i = 0; i < rightCount; i++) rightSum += current + leftCount + i; 

        if (leftSum !== rightSum) {
            printOut("Feil på linje: " + line + " - venstre: " + leftSum + ", høyre: " + rightSum);
            return; 
        }

        current += leftCount + rightCount; 
    }

    printOut("Maths fun!"); 
}

testConsecutivePartitions(200); 


printOut(newLine);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n) {
    // Guard invalid input: non-integer or negative -> NaN
    if (typeof n !== "number" || !Number.isInteger(n) || n < 0) return NaN;

    // Iterative implementation avoids recursion limits
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage: print a few values using printOut (not console.log)
for (let number = 0; number <= 10; number++) {
    printOut(`Factorial of ${number} = ${factorial(number)}`);
}




printOut(newLine);
