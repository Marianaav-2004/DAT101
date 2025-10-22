"use strict"
import {printOut} from "../../common/script/utils.mjs";


let text = "";

function addText (aNewText) {
    let text = aNewText;
    text += "<br />"
    return text;
}

let gratings = addText ("Hei på deg");
printOut (gratings); 





function sum (aNumber1, aNumber2, aNumber3){
    let calc = aNumber1 + aNumber2 + aNumber3;
    return calc; 
}

let result = sum (1, 2, 3);
printOut (result); 






letaNumber3 = 0;
aNumber3 = 3;

function sum (aNumber1, aNumber2, aNumber3 = 0, aNumber4 = 0){
    let calc = aNumber1 + aNumber2 + aNumber3 + aNumber4;
    return calc; 
}

let result = sum (1,2);
printOut (result); 



