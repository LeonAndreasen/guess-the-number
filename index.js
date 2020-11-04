const secret = randomInt()
function randomInt(){

return Math.floor(Math.random() * 100);
}


function getUserGuess() {
const stringValue = document.getElementById("user-input").value
return parseInt(stringValue, 10)
}
document.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        const guess = getUserGuess()
        console.log(guess)
        if (guess > secret) {
setMessage("Too High!")}
if (guess < secret){
    setMessage("Too Low!")
    }
    if (guess === secret){
        setMessage("You are correct")
    }
}
})

 function setMessage(msg){
     document.getElementById("message").innerText = msg
    }  
 
