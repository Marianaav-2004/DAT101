"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function cmbTask1CalculateClick () {
    const txtTask1Output = document.getElementById("txtTask1Output");
    const txtRectHeight = document.getElementById("txtRectHeight");
    const txtRectWidth = document.getElementById("txtRectWidth");
    const width = parseInt(txtRectWidth.value);
    const height = parseInt(txtRectHeight.value);
    const area = width * height;
    const perimeter = 2 * (width + height); 
    txtTask1Output.innerHTML = `width: ${width}, height: ${height}`;
    txtTask1Output.innerHTML += `<br/>area: ${area}, perimeter: ${perimeter}`;

}

let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.onclick = cmbTask1CalculateClick; 



//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function txtTask2WordKeyPress (aEvent){
  const txtTask2Output = document.getElementById("txtTask2Output");
  //txtTask2Output.innerHTML = `You pressed the key: ${aEvent.key}`;
  if (aEvent.key === "Enter"){
      const word = txtTask2WordKeyPress.value;
      task2Words.push(word);
      txtTask2Output.innerHTML = `You have entered ${task2Words.length} words: <br/>`;
      txtTask2Output.innerHTML += task2Words.join(", ");
      txtTask2Word.value = "";
  }  
}

const txtTask2Word = document.getElementById("txtTask2Word"); 
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
const task2Words = [];



//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const chkTask3 = document.getElementsByName ("chkTask3"); 
const cmbTask3CheckAnswer = document.getElementById ("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById ("txtTask3Output");
function cmbTask3CheckAnswerClick() {
  txtTask3Output.innerHTML = ""; 
  for (let i = 0; i < chkTask3.length; i++) {
      const chkBox = chkTask3[i]; 
      const text = `chkTask3[${i}].checked = ${chkBox.checked}`;
      txtTask3Output.innerHTML += text + "<br/>";
  }
}
cmbTask3CheckAnswer.addEventListener ("click", cmbTask3CheckAnswerClick); 




//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function rdbCarNameSelect (aEvent) { 
  const txtTask4Output = document.getElementById ("txtTask4Output");
  txtTask4Output.innerHTML = 
    `User selected car number: ${aEvent.target.value}`; 
}


const divTask4Cars = document.getElementById("divTask4Cars"); 
for (let i = 0; i < CarTypes.length; i++) {
  
  const car = CarTypes [i]; 
  const inpRadio = document.createElement("input"); 
  inpRadio.type = "radio"; 
  inpRadio.name = "rdbCarName"; 
  inpRadio.value = car.value; 
  inpRadio.id = "rdbCarName" + i.toString(); 
  inpRadio.addEventListener ("change", rdbCarNameSelect); 

  const lblCaption = document.createElement("label"); 
  lblCaption.for = inpRadio.id; 
  lblCaption.appendChild (document.createTextNode(car.caption)); 
  divTask4Cars.appendChild (inpRadio); 
  divTask4Cars.appendChild (lblCaption); 
  divTask4Cars.appendChild (document.createElement ("br")); 


  console.log (`CartTypes[${i}].value = ${car.value}, CarTypes[${i}].caption = ${car.caption}`); 
}





//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output"); 

function selectTask5AnimalsChange (aEvent) {
  const animalValue = selectTask5Animals.value;
  txtTask5Output.innerHTML = "User selected animal num:#" + animalValue; 
}

selectTask5Animals.addEventListener ("change", selectTask5AnimalsChange); 




//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask6Girls = document.getElementById("selectTask6Girls"); 
const txtTask6Output= document.getElementById("txtTask6Output");

for (let i =0; i < GirlsNames.length; i++) {
  const option = document.createElement ("option"); 
  option.value = i.toString();
  option.appendChild (document.createTextNode (GirlsNames[i])); 
  selectTask6Girls.appendChild (option);  
}
function selectGirlsChange (){ 
  const value = parseInt (selectTask6Girls.value)
  const name = GirlsNames [value]; 
  txtTask6Output.innerHTML = `You selected: ${value}, ${name}`; 


}
selectTask6Girls.addEventListener ("change", selectGirlsChange); 




//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

document.addEventListener ("DOMContentLoaded", () => {

  const find = (...ids) => ids.map(id => document.getElementById(id)).find(Boolean); 

  const selGenre = find("selectMovieGenre", "filmsjanger", "selectTask7Genre"); 
  const btnAdd = find("cmbAddMovie", "cmdAddMovie", "btnAddMovie"); 
  const tbl = find ("tblMovies", "movieTable", "tblMovieList", "tableMovies"); 
  const inputTitle = find ("filmtittel", "txtMovieTitle", "movieTitle"); 
  const inputDirector = find ("filmregissør", "filmregissor", "filmregissorInput", "txtMovieDirector"); 
  const inputRate = find ("filmrate", "filmRating", "txtMovieRating"); 

  if (selGenre) { 
    selGenre.innerHTML = ""; 
    for (let i = 0; i < MovieGenre.length; i++) { 
      const opt = document.createElement("option");
      opt.value = MovieGenre[i];
      opt.text = MovieGenre[i]; 
      selGenre.appendChild(opt); 
    }
  } else {
    console.warn("selectMovieGenre not found - genres not populated"); 
  }

  if (!btnAdd) { 
    console.warn ("cmbAddMovie button not found - cannot add movies"); 
    return; 
  }

  let tbody = tbl ? tbl.querySelector("tbody") : null; 
  if (tbl && !tbody) {
    tbody = document.createElement ("tbody"); 
    tbl.appendChild (tbody); 
  }

  btnAdd.addEventListener("click", (e) => {
    e.preventDefault();

    const title = inputTitle ? (inputTitle.value || "").trim() : "";
    const genre = selGenre ? (selGenre.value || "").trim() : ""; 
    const director = inputDirector ? (inputDirector.value || "").trim() : "";
    const ratingRaw = inputRate ? (inputRate.value || "").trim() : ""; 
    const rating = ratingRaw === "" ? "" : Number(ratingRaw.replace(",", ".")); 

    if (!title) { 
      alert("Oppgi filmtittel."); 
      if (inputTitle) inputTitle.focus(); 
      return; 
    }
    if (!genre) { 
      alert("Velg filmsjanger."); 
      if (selGenre) selGenre.focus(); 
      return; 
    }
    if (!director) { 
      alert("Oppgi filregissør.");
      if (inputDirector) inputDirector.focus(); 
      return; 
    }
    if (ratingRaw !== "" && (!isFinite(rating) || rating < 0)) { 
      alert ("Ugyldig rating. Bruk et tall."); 
      if (inputRate) inputRate.focus(); 
      return; 
    }

    if (tbody) { 
      const tr = document.createElement("tr"); 

      const tdTitle = document.createElement("td"); 
      tdTitle.textContent = title; 
      tr.appendChild (tdTitle); 

      const tdGenre = document.createElement("td"); 
      tdGenre.textContent = genre; 
      tr.appendChild (tdGenre); 

      const tdDirector = document.createElement("td"); 
      tdDirector.textContent = director; 
      tr.appendChild (tdDirector); 

      const tdRating = document.createElement("td"); 
      tdRating.textContent = ratingRaw === "" ? "" : Number(rating).toFixed(2);
      tr.appendChild (tdRating); 

      tbody.appendChild (tr); 
    } else {
      console.log("Movie:", {title, genre, director, rating: ratingRaw === "" ? "" : Number(rating).toFixed(2) }); 
    }

    if (inputTitle) inputTitle.value = ""; 
    if (inputDirector) inputDirector.value = ""; 
    if (inputRate) inputRate.value = ""; 
    if (inputTitle) inputTitle.focus(); 
  }); 
}); 







