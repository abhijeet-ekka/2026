const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");
const clnRegex = /[^a-z0-9]/gi;

btn.addEventListener("click", palindrome)

function palindrome(){
    const cleanStr = input.value.replace(clnRegex, "").toLowerCase();
    const revStr = cleanStr.split("").reverse().join("");
    console.log(revStr); 
 
    if(input.value === ""){
        alert("Please give input")
    }else if(revStr === cleanStr){
        result.textContent = `${input.value} is Palindrome`;
    } else {result.textContent = `${input.value} is not Palindrome`;}



    
    
}