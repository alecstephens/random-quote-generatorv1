/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    source: 'John Lennon'
  },
  {
    quote: 'You only live once, but if you do it right, once is enough',
    source: 'Mae West'
  },
  {
    quote: 'A man is but what he knows.',
    source: 'Sir Francis Bacon',
  },
  {
    quote: 'You miss 100 percent of the shots you never take.',
    source: 'Wayne Gretzky',
    citation: '1983 interview with Bob McKenzie'
  },
  {
    quote: 'A great man is always willing to be little',
    source: 'Ralph Waldo Emerson',
    year: '1841'
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly.',
    source: 'John F. Kennedy'
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  const htmlString = `<p class = "quote">${randomQuote.quote}</p>
                      <p class = "source">${randomQuote.source}`
                      if(quotes[citation]) {
                        `<span class = "citation">${randomQuote.citation}</span>`
                      } else if(quotes[year]) {
                        `<span class = "year">${randomQuote.year}</span>`
                      }
                     `</p>`;
  return htmlString;
}

document.getElementById('quote-box').innerHTML = printQuote(); 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
