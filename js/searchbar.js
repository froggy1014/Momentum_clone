const line = document.getElementById("sch")
const searchbox = document.getElementById("searchbar")
const textline = document.querySelector("#searchbar input")

function readysearch(){
    line.style.visibility = "visible";
}
function searchover(){
    line.style.visibility = "hidden";
}
function handleSubmit(){
    console.log("submit");
}
line.style.visibility = "hidden";
searchbox.addEventListener("mouseover", readysearch);
searchbox.addEventListener("mouseout", searchover);
textline.addEventListener("submit", handleSubmit);