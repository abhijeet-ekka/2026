btns = document.querySelectorAll(".btns button");
p = document.querySelector("p");

btns.forEach(btn =>{
    btn.addEventListener("click", ()=> {
        p.textContent = btn.textContent;
  console.log("Tab Clicked", btn.textContent);
    });
        
   
})