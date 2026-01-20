const name = document.querySelector("#name");
const wish = document.querySelector("#wish");
const btn = document.querySelector("button");
const txt = document.querySelector("#text");



btn.addEventListener("click", () => {
    if(name.value === "" ){
        // txt.style.color = "white";
        txt.style.background = "red"
        txt.textContent = "Enter your Name"
    }else if(wish.value === ""){
        txt.style.background = "red"
        txt.textContent = "Enter your wish"
    }else
        txt.style.background = "none"
        txt.textContent = `${name.value} your wish is ${wish.value}`
     
})