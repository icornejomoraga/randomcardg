let numero = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let simbolo = ["♦", "♥", "♠", "♣"];

let posicionNumero = Math.floor(Math.random() * numero.length);
let posicionSimbolo = Math.floor(Math.random() * simbolo.length);

function numeroAleatorio() {
    return numero[posicionNumero];
}
function simboloAleatorio() {
    if (posicionSimbolo <=1){
        document.querySelector("#simbolo-1").style.color = "red";
        document.querySelector("#simbolo-2").style.color = "red";
        document.querySelector("#simbolo-2").style.transform = "rotate(180deg)"
        document.querySelector("#simbolo-2").style.marginTop = "460px"
        document.querySelector("#simbolo-2").style.marginRight = "15px";
    } else {
        document.querySelector("#simbolo-1").style.color = "black";
        document.querySelector("#simbolo-2").style.color = "black"
        document.querySelector("#simbolo-2").style.transform = "rotate(180deg)"
        document.querySelector("#simbolo-2").style.marginTop = "460px"
        document.querySelector("#simbolo-2").style.marginRight = "15px";
    }
    return simbolo[posicionSimbolo];
}

document.querySelector("h1").innerHTML = numeroAleatorio();
document.querySelector("#simbolo-1").innerHTML = simboloAleatorio();
document.querySelector("#simbolo-2").innerHTML = simboloAleatorio();