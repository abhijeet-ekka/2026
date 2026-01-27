const msgInput = document.querySelector("#message");
const btn = document.querySelector("#btn");
const result = document.querySelector(".result");
const plsRegex = /please help|assist/i;

function isSpam(msg){
    return plsRegex.test(msg)
}

console.log(isSpam(msgInput.value));

console.log(isSpam("assist"))

btn.addEventListener("click", () => {
   if(msgInput.value === ""){
    alert("Please enter a message.")
    result.textContent = "";
   }else if(isSpam(msgInput.value)){
    result.textContent = "The message seems to be spam";
   }else{
    result.textContent = "This message doesn't seem to contain spam"
   }
   return  msgInput.value = "";
})