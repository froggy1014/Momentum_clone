const qtbox = document.querySelector("#qt-box");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
let todaysQuote = "";

function showingauthor (){
    quote.style.display = "none";
    author.style.display = "inline";
    author.innerText = todaysQuote.author;
    author.style.color = "white";
 }
 
 function showingquote(){
    author.style.display = "none";
    quote.style.display = "inline"
    quote.innerText = todaysQuote.text;
    quote.style.color = "white";
 }

function bringquote()
{
    fetch(
        `https://type.fit/api/quotes`
    )
    .then(function(response){
        return response.json();
      })
        .then(function(json){
          console.log(json[Math.floor(Math.random()*(json.length-1)+1)])
          todaysQuote = json[Math.floor(Math.random()*json.length)];
          quote.innerText = todaysQuote.text;
          return quote.style.color = "white";
          
 });
}
 bringquote();
qtbox.addEventListener("mouseover", showingauthor);
qtbox.addEventListener("mouseout", showingquote);

