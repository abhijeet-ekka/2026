const msgInput = document.querySelector("#message");
const btn = document.querySelector("#btn");
const result = document.querySelector(".result");
const plsRegex = /please help|assist/i;

function isSpam(msg){
    return plsRegex.test(msg)
}

console.log(isSpam("assist"))

btn.addEventListener("click", () => {
   if(msgInput.value === ""){
    alert("Please enter a message.")
   }
   return result.textContent = msgInput.value;
})