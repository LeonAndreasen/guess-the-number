//const n = 2000
function randomInt(){

return Math.floor(Math.random() * 100);
}
console.log(randomInt())

function getUserGuess() {
const stringValue = document.getElementById("user-input").value
return parseInt(stringValue, 10)
}
document.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        const guess = getUserGuess()
        console.log(guess)
    }
})
 function setMessage(msg){
     if (guess  === randomInt) {
     alert ("You won!")
     } else {
         
     }
 }
