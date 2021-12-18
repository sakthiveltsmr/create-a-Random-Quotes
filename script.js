let text = document.querySelector("#quote");
let author = document.querySelector("#author");

const getNewQuote = async () => {
  let url = "https://type.fit/api/quotes";
  const data = await fetch(url); //fetching quotes
  //   console.log(typeof quotes);
  const quotes = await data.json(); //converting json to object
  //   console.log(quotes);
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index].text;
  const authr = quotes[index].author;
  if (authr == null) {
    author = "Anonymous";
  }
  text.innerHTML = quote;
  author.innerHTML = `- ${authr}`;
};
getNewQuote();
