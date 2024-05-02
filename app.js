

let btn = document.querySelector('#newQuote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{

    quote: "Never gonna give you up, never gonna let you down, Never gonna run around and desert you.",
    person: "Rick Astley"},

    {
        quote: "Life is like a d*ck, its hard.",
        person: "Someone who is probably hard"},

    {
        quote: "Why you no doctor yet?",
        person: "Dad"},

    {
        quote: "Kung kaya gawin ng iba, pagawa mo sa iba.",
        person: "Daniel Padilla"},

    {
        quote: "Don't stop when you're tired, stop when you're done.",
        person: "Me"},

    {
        quote: "Why pass the quiz when you can pass away.",
        person: "pogi123"},


];

btn.addEventListener('click', function(){


    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;

    console.log(quotes.length)
    console.log(random)


})