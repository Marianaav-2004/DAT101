"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textPart1Line1 = "";
let textPart1Line2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--){
    textPart1Line1 += " " + i;
    textPart1Line2 += " " + j;
}

printOut(textPart1Line1);
printOut(textPart1Line2);



printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part1GuessNumber = 45;
let part1Random = Math.floor(Math.random()* 60) + 1;
while (part1Random !== part1GuessNumber){
part1Random = Math.floor(Math.random() * 60) + 1; 
}

printOut("Yes! You guessed correct: " + part1Random);
printOut(newLine);





printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part3Time = Date.now();
const part3GuessNumber = 654321;
let part3Random; 
let part3Count = 0;
do{
    part3Random = Math.floor(Math.random() * 1000000) + 1;
    part3Count ++;
}while (part3Random !== part3GuessNumber);

printOut (" Number of guesses: " + part3Count);
const part3DeltaTime = Date.now() - part3Time; 
printOut ("Number of milliseconds: " + part3DeltaTime); 

printOut(newLine);





printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textPart4Primes = ""; 
for (let i = 1; i < 200; i++){
    let j = i - 1; 
    let isPrime = true;
    while (j > 1 && isPrime){
        let rest = i % j;
        isPrime = rest != 0; 
        j--;
    }
    if (isPrime) {
         textPart4Primes += " " + i;
    }
   
} 

printOut(textPart4Primes);
printOut(newLine);





printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


for (let r = 1; r <= 7; r++){
    let line = "";
    for (let c = 1; c <= 9; c++){
        line = line + "C" + c + "R" + r + " ";
    }

printOut(line.trim());
}

printOut(newLine);





printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function getGrade (score){
    let percent = (score / 236) * 100;
    if (percent >= 89) return 'A';
    else if (percent >= 77) return "B";
    else if (percent >= 65) return "C";
    else if (percent >= 53) return "D"; 
    else if (percent >= 41) return "E";
    else return "F";
}  
for (let student = 1; student <= 5; student++) {
    let score = Math.floor(Math.random() * 237) + 1;
    let grade = getGrade(score);

    printOut (" Student " + student + " got score " + score + " and grade " + grade);
}


printOut(newLine);





printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rolldice (){
    return Math.floor(Math.random() * 6) + 1;
}

function getCounts (dice) {
    let counts = [0, 0, 0, 0, 0, 0];
    for (let die of dice){
        counts [die - 1]++;
    }
    return counts;
}
function checkCombinations(dice) {
    let counts = getCounts(dice);

    if (counts.every(count => count === 1)) {
        return "Full straight!";   
    }
    else if (counts.filter(count => count === 2).length === 3) {
        return "3 pairs!";
    }
    else if (counts.includes(4) && counts.includes(2)) {
        return "4 of a kind + a pair!";
    }
    else if (counts.includes(6)) {
        return "Yahtzee!";
}
return null;
}

function trowUntil(target) {
    let trows = 0;
    let result = null; 

    do {
        trows++;
        let dice =[];
        for (let i = 0; i < 6; i++) {
            dice.push(rolldice());
        }
        result = checkCombinations(dice);
    } while (result !== target);
    return trows;
}
let goals = ["Full straight!",
    "3 pairs!",
    "4 of a kind + a pair!",
    "Yahtzee!"];
for (let goal of goals) {
    let count = trowUntil(goal);
    printOut ("It took " + count + " trows to get " + goal);
}



printOut(newLine);







printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
