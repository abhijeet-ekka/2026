const input = document.querySelector("#word");
const btn = document.querySelector("button");
const result = document.querySelector(".para")
const str = input.value;
const regex = /input.value/ig;
console.log(regex);
btn.addEventListener("click", () =>{
    if(input.value === ""){
        alert("Please input a value");
         result.textContent = "";
    }else {
        result.textContent = `${input.value}`;
        input.value = "";
    }
})