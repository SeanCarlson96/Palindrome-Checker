function assign(){
let str = document.getElementById("entry").value;

function palindrome(str) {
  let newStr = str.replaceAll(/[^a-z\d:]/ig, "");
  newStr = newStr.toLowerCase().split("");
  let firstHalfArr = [];
  let secondHalfArr = [];
  if (newStr.length % 2 !== 0){
    let middleDig = (newStr.length / 2) - 0.5;
    firstHalfArr = newStr.slice(0, middleDig);
    secondHalfArr = newStr.slice(middleDig + 1);
  } else {
    let middleDig = (newStr.length / 2);
    firstHalfArr = newStr.slice(0, middleDig);
    secondHalfArr = newStr.slice(middleDig);
  }
  for(let i = 0; i < secondHalfArr.length / 2; i++){
    let temp = secondHalfArr[i];
    secondHalfArr[i] = secondHalfArr[secondHalfArr.length - i - 1];
    secondHalfArr[secondHalfArr.length - i - 1] = temp;
}
function arrayEquals(firstHalfArr, secondHalfArr) {
  return Array.isArray(firstHalfArr) &&
    Array.isArray(secondHalfArr) &&
    firstHalfArr.length === secondHalfArr.length &&
    firstHalfArr.every((val, index) => val === secondHalfArr[index]);
}
return arrayEquals(firstHalfArr, secondHalfArr);
}

var card = document.getElementById("card");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
   
if (palindrome(str)) {
    card.style.boxShadow = "0 0 80px 0 rgba(0,190,0,0.9)";
} else {
  card.style.boxShadow = "0 0 80px 0 rgba(255,0,0,0.9)";
}

if (str == "racecar" || str == "Racecar" || str == "RACECAR"){
  yellow.style.animation = "drive 4s ease-in-out, jump 0.3s 1.2s ease";
}
if (str == "tacocat" || str == "Tacocat" || str == "TACOCAT"){
  blue.style.animation = "drive 6s ease-in";
}
}