//funzione per creare un numero di quadrati
function createSquares(number, className) {
    let squares = [];
    let list = [];

    /* ciclo for che ripete la funzine generateRandomNumber per 16 volte */
    for (let i = 0; i < 16; i++) {
        generateRandomNumber(1, 70, list); //non posso mettere come argomento il parametro number della funzione createSquare
    }
    console.log(list);

    /* ciclo che crea i quadrati */
    for (let i = 0; i < number; i++) {
        let square = document.createElement("div");
        let content = document.createElement("span");

        square.appendChild(content);
        square.classList.add("square");
        square.classList.add(className);
        square.setAttribute("id", i + 1)
        content.classList.add("d-none");
        if (list.includes(i)) {
            content.textContent = "bomba";
        } else {
            content.textContent = "fiore"
        }

        let score = 0;
        square.addEventListener("click", function () {
            content.classList.remove("d-none")
            /* console.log(square.id); */
            if (content.textContent === "bomba") {
                console.log("game over");
                document.getElementById("message").innerHTML = "hai perso";
                square.classList.remove("square");
                square.classList.add("red");
            } else {
                score += 10;
                console.log (score);
            }
        })

        squares.push(square);
    }

    return squares;

}


/* let lista = [];
for (let i = 0; i<16; i++) {
    generateRandomNumber(1, 100, lista)
}
if (lista.includes(i)){
    content.textContent = "bomba";
} */

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