const quotes = [
    {
        quote: "A mind too active is no mind at all",
        author: "Theodore Roethke",
    },
    {
        quote: "Manners maketh man",
        author: "William of Wykeham",
    },
    {
        quote: "It's the friends you can call up at four a.m. that matter",
        author: "Marlene Dietrich",
    },
    {
        quote: "The ballot is stronger than the bullet",
        author: "Abraham Lincoln",
    },
    {
        quote: "It's the friends you can call up at four a.m. that matter",
        author: "Marlene Dietrich",
    },
    {
        quote: "Courage is fear that has said its prayers",
        author: "Dorothy Bernard",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[ Math.floor(Math.random() * quotes.length ) ];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;