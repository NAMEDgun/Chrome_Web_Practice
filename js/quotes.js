const quotes = [
    {
        quote:"I do not know what the future holds, but I know who holds the future.",
        author: "Oprah Winfrey",
    },
    {
        quote:"An investment in knowledge always pays the best interest.",
        author: "Benjamin Franklin",
    },
    {
        quote:"The best way to predict the future is to invent it.",
        author: "Alan Kay",
    },
    {
        quote:"If you don't walk today, you have to run tomorrow.",
        author: "Carles Puyol",
    },
    {
        quote:"The future depends on what we do in the present.",
        author: "Mahatma Gandhi",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//We need for CSS code. We should make an UI's project for Chrome page practice