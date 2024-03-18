function createSquares(number, className) { /* funzione per creare un numero di quadrati */
    let list = [];
    generateRandomNumber(0, number, list);
    let squares = []; /* array che contine i div */
    for (let i = 0; i < number; i++) { /* ciclo che si ripete un number (argomento) di volte */
        let square = document.createElement("div");  /* variabili che contiene i div */
        let randomContent = list.includes(i) ? "bomba" : "fiore";
        /* Math.random() < 0.8 ? "fiore" : "bomba"; */
        /* square.innerHTML = `<span> ${randomContent}</span>`; */
        let content = document.createElement("span"); /* variabile che contiene gli span */
        content.textContent = randomContent;
        square.appendChild(content);
        square.classList.add("square");
        square.classList.add(className);
        square.setAttribute("id", i + 1)
        content.classList.add("d-none");
        square.addEventListener("click", function () {
            content.classList.remove("d-none")
            /*  console.log(square.id); */
        });
        squares.push(square);
    }

    return squares;
};

console.log(createSquares(10));

let campoMinato = document.getElementById("campoMinato");
const difficulty = document.getElementById("difficulty"); /* prendo oggetto "difficulty" */
const play = document.getElementById("play"); /* prendo oggetto "play" */

/* let squares; */
play.addEventListener("click", function () {
    let squares = [];
    if (difficulty.value === "difficoltà1") {
        squares = createSquares(100, "facile");
        /*  console.log(squares); */

    } else if (difficulty.value === "difficoltà2") {
        squares = createSquares(81, "medio");
        /* console.log(squares); */
    } else if (difficulty.value === "difficoltà3") {
        squares = createSquares(49, "difficile");
        /*  console.log(squares); */
    }
    campoMinato.innerHTML = "";
    squares.forEach(element => {
        campoMinato.appendChild(element);
    });
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* 
function generateRandomNumber(min, max, lista) {
    let check = false;
    let number;
    do {
        number = getRndInteger(min, max);

        if (!lista.includes(number)) {
            lista.push(number);
            check = true;
        }
    } while (!check)
    return number;
} */

function generateRandomNumber(min, max, lista) {
    let check = false;
    let number;
    while (!check) {
        number = getRndInteger(min, max);

        if (!lista.includes(number)) {
            lista.push(number);
            check = true;
        }
    }
    return number;
}

/* let list = [];
generateRandomNumber (3,9, list);
console.log(list);

for (let i=0; i<16; i++){
    generateRandomNumber(1,100,list)
}

console.log("lista " + list); */
