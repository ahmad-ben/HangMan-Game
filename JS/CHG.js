const ourLetters = "abcdefghijklmnopqrstuvwxyz";
const arrLetters = Array.from(ourLetters);
const lettersContainer = document.querySelector(".letters");
arrLetters.forEach((letter) => {
    let span = document.createElement("span");
    let letterSpan = document.createTextNode(letter);
    span.appendChild(letterSpan);
    span.className = "letter-box";
    lettersContainer.appendChild(span);
});

let object = {
    "Arabic Countries" : ["Morocco", "Qatar", "Saudi Arabia", "Egypt"],
    "Famous Players" : ["Mohamed Salah", "Lionel Messi", "Cristiano Ronaldo", "Neymar Jr"],
    "Famous Muslims" : ["Mohamed Hijab", "Andrew Tate", "Dakir Nike"],
}


console.log(` - Create Arr From Our Object Keys : `);
let objectKeysArr = Object.keys(object);
console.log(objectKeysArr);

console.log(` `);
console.log(` - Random Index From The Array Keys : `);
let randomIndexKeys =  Math.trunc(Math.random() * objectKeysArr.length);
console.log(randomIndexKeys);

console.log(` `);
console.log(` - Use The Index For Get A Name Of The Key : `);
let objectKeyName = objectKeysArr[randomIndexKeys];
console.log(objectKeyName);

console.log(` `);
console.log(` - Use The Key Name For Get The Value Of It : `);
let objectKeyValue = object[objectKeyName];
console.log(objectKeyValue);

console.log(` `);
console.log(` - Use The Key Value (Array) For Get A Random Index : `);
let randomIndex2 = Math.trunc(Math.random() * objectKeyValue.length);
console.log(randomIndex2);

console.log(` `);
console.log(` - Use The Random Index For Get A Value From The (Array) : `);
let finalValue = objectKeyValue[randomIndex2];
console.log(finalValue);

console.log(` `);
console.log(` - Add The Category To The Span : `);
let spanCategory = document.querySelector(".category span");
console.log(spanCategory);
spanCategory.innerHTML = objectKeyName ;

console.log(` `);
console.log(` - Every Character In The Chosen Word Will Be Empty Span : `);
//Change The Chosen Word To Array :
let chosenStr = Array.from(finalValue);
//Target The Empty Span Holder (DIV:letters-guess) :
let spanHloder = document.querySelector(".letters-guess");
chosenStr.forEach((chara) => {
    let emptySpan = document.createElement("span");
    if(chara === " "){
        emptySpan.className = "with-space";
    }
    spanHloder.appendChild(emptySpan);
})

let wrongsNum = 0;
let spanFullNum =0;
let manShape = document.querySelector(".the-draw");
let arrOfEmptySpan = document.querySelectorAll(".letters-guess span");
let letterHolder = document.querySelector(".letters");
console.log(letterHolder);

document.addEventListener("click", (e) => {
    //Set The State Of The Answer
    theStatus = false;
    //If The Target Of The Click Is letter-box.
    if(e.target.className === "letter-box"){
        //Add A Class To Change Some Properties.
        e.target.classList.add("clicked-letter");
        chosenStr.forEach((letter, index) => {
            if(letter.toLowerCase() == e.target.innerHTML) {
                theStatus = true;
                //Create Array From The Empty Spans
                arrOfEmptySpan = document.querySelectorAll(".letters-guess span");
                arrOfEmptySpan[index].innerHTML = letter;
            };
        });
        if(theStatus !== true) {
            wrongsNum++;
            manShape.classList.add(`wrong-${wrongsNum}`);
            if(wrongsNum > 7){
                letterHolder.style.cssText ="pointer-events: none;";
                gameOver();
            }
        }else{
            let spanFullNum = 0;
            arrOfEmptySpan.forEach((span) => {
                if(span.innerHTML !== "" || span.className === "with-space"){
                    console.log(span);
                    spanFullNum++;
                    console.log(spanFullNum);
                    console.log(arrOfEmptySpan.length);
                    if(spanFullNum === arrOfEmptySpan.length) {
                        letterHolder.style.cssText = "pointer-events: none;";
                        gameFinish();
                    }
                }
            })
        }
    };
});

function gameOver(){
    let divLose = document.createElement("div");
    divLose.className = "loss";
    let buttonReload = document.createElement("button");
    buttonReload.className = "btnreload";
    let textlose = document.createTextNode(`You Lose, The Word Is ${finalValue}`);
    let textbtn = document.createTextNode(`Try Again?`);
    buttonReload.appendChild(textbtn);
    divLose.appendChild(textlose);
    divLose.appendChild(buttonReload);
    document.body.appendChild(divLose);
    buttonReload.addEventListener("click",() => {
        location.reload();
    })
};
function gameFinish(){
    let divWin = document.createElement("div");
    divWin.className = "win";
    let buttonReload = document.createElement("button");
    buttonReload.className = "btnreload";
    let textwin = document.createTextNode(`You Win, The Word Is ${finalValue}`);
    let textbtn = document.createTextNode(`Try Again?`);
    buttonReload.appendChild(textbtn);
    divWin.appendChild(textwin);
    divWin.appendChild(buttonReload);
    document.body.appendChild(divWin);
    buttonReload.addEventListener("click",() => {
        location.reload();
    })
};
