console.log("jó reggelt!");

/* fogd meg a bal oldali aside elemet */

/* document.getElementById */
let balElem = document.getElementById("bal");
console.log(balElem);

/* document.querySelector */
let balElem2 = document.querySelector("#bal");
console.log(balElem2);

/* document.querySelectorAll */
let balElem3 = document.querySelectorAll("#bal");
console.log(balElem3);

balElem2.innerHTML = "<p>Tegnap megszületett az unokám!</p>";
balElem3[0].innerHTML += "<p>Tökfilkó a hegyen!</p>";

/* document.getElementById */
let tartalomElem = document.getElementsByClassName("tartalom");
console.log(tartalomElem);


/* document.querySelector */
let tartalomElem2 = document.querySelector("tartalom");
console.log(tartalomElem2);


/* document.querySelectorAll */
let tartalomElem3 = document.querySelectorAll("tartalom");
console.log(tartalomElem3);


let footerElem = document.querySelector("footer")
console.log(footerElem)
footerElem.innerHTML = "<p>Medgyaszay Gergő</p>"


let tartalomElem4 = document.querySelectorAll("article div")
let inputElem= document.getElementById("nev")


inputElem.addEventListener("keyup", udvozles)
let buttonElem= document.querySelector("article button")

/* ráteszem a gomba az eseménykezelőt */
buttonElem.addEventListener("click", udvozles)

function udvozles() {
    let nev = inputElem.value
    tartalomElem4[2].innerHTML += `Szia ${nev}!`
}

/* let nev=inputElem.value
tartalomElem4[2].innerHTML+=`Szia ${nev}!` */

let pElem= document.querySelector("article >p:nth-child(1)")
let jobbElem = document.querySelector("#jobb")

pElem.addEventListener("click", athelyez)

function athelyez(event){
    jobbElem.appendChild(event.target)
}

pElem.addEventListener("mouseover", feltesz)

function feltesz(){
    pElem.classList.add("szegely")
}