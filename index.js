//VARIÁVEIS DE MÁXIMO E MÍNIMO DE XP
let max = 11000;
let lv;

//A XP VAI SER MEDIDA POR UM Math.random() que vai multiplicar o pelo valor máximo de xp
let xp = Math.floor(Math.random() * (max)) + 1; //Math.floor() serve para arredondar um número para inteiro

// ESTRURA QUE DECIDE O LV
if (xp < 1000) {lv =  "Ferro"}
else if (xp >= 1001 && xp <= 2000) {lv = "Bronze"}
else if (xp >= 2001 && xp <= 5000) {lv = "Prata"}
else if (xp >= 5001 && xp <= 7000) {lv = "Ouro"}
else if (xp >= 7001 && xp <= 8000) {lv = "Platina"}
else if (xp >= 8001 && xp <= 9000) {lv = "Ascendente"}
else if (xp >= 9001 && xp <= 10000) {lv = "Imortal"}
else if (xp >= 10001 ) {lv = "Radiante"}

//IMPRIME NO TERMINAL
//console.log(xp);
//console.log(lv);
console.log("O heroi de nome **Cláudio Luis** está no nível " + "**" + lv +"**");






