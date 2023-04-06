const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btnEl= document.getElementById("btn");

const apiURL = "https://api.quotable.io/random";


async function getQuote(){
    try {
        btnEl.innerText= "Loading...";
        btnEl.disabled = true;
        authorEl.innerText = "Updating...";
        quoteEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContnet = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContnet;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText= "Get a quote";
        btnEl.disabled = false;
        
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happend, try again later";
        authorEl.innerText = "An error happend";
        btnEl.disabled = false;
    }

}

getQuote();

btnEl.addEventListener("click", getQuote)


