/*Legördülő valami*/
/*1*/
const gomb = document.querySelector(".ora-gomb");
const szoveg = document.querySelector(".orak-tartalom");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

gomb.addEventListener("click", () => {
    szoveg.classList.toggle("aktiv-edzes");
    minus.classList.toggle("aktiv-edzes");
    plus.classList.toggle("inaktiv");
})

/*2*/
const gomb2 = document.querySelector(".ora-gomb2");
const szoveg2 = document.querySelector(".orak-tartalom2");
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");

gomb2.addEventListener("click", () => {
    szoveg2.classList.toggle("aktiv-edzes2");
    minus2.classList.toggle("aktiv-edzes2");
    plus2.classList.toggle("inaktiv2");
})

/*3*/
const gomb3 = document.querySelector(".ora-gomb3");
const szoveg3 = document.querySelector(".orak-tartalom3");
const plus3 = document.querySelector(".plus3");
const minus3 = document.querySelector(".minus3");

gomb3.addEventListener("click", () => {
    szoveg3.classList.toggle("aktiv-edzes3");
    minus3.classList.toggle("aktiv-edzes3");
    plus3.classList.toggle("inaktiv3");
})

/*4*/
const gomb4 = document.querySelector(".ora-gomb4");
const szoveg4 = document.querySelector(".orak-tartalom4");
const plus4 = document.querySelector(".plus4");
const minus4 = document.querySelector(".minus4");

gomb4.addEventListener("click", () => {
    szoveg4.classList.toggle("aktiv-edzes4");
    minus4.classList.toggle("aktiv-edzes4");
    plus4.classList.toggle("inaktiv4");
})
