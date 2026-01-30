const mdInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");

function convertMarkdown(md){
    md = md.target.value;
    const cleanTxt = md.replace(/\W/g, "");
    if(md.includes("#")){
        htmlOutput.textContent = `<h1>${cleanTxt} </h1>`
    }else return htmlOutput.textContent = "hello"
}

mdInput.addEventListener("input", convertMarkdown)