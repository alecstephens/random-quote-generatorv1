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
let htmlString;
function printQuote() {
  const randomQuote = getRandomQuote();
  const quoteString = `<p class = "quote">${randomQuote.quote}</p>`;
  let sourceString = `<p class = "source">${randomQuote.source}
                        <span class = "citation">${randomQuote.citation}</span>
                        <span class = "year">${randomQuote.year}</span>
                      </p>`;
  if(quotes.some(quotes => quotes.citation)) {
    sourceString = `<p class = "source">${randomQuote.source}
                      <span class = "citation">${randomQuote.citation}</span>
                    </p>`;
    htmlString = quoteString + sourceString;  
  } else if(quotes.some(quotes => quotes.year)) {
    sourceString = `<p class = "source">${randomQuote.source}
                      <span class = "year">${randomQuote.year}</span>
                    </p>`;
    htmlString = quoteString + sourceString;
  } else {
    sourceString = `<p class = "source">${randomQuote.source}</p>`;
    htmlString = quoteString + sourceString;                    
  }                    
  return htmlString;
}

document.getElementById('quote-box').innerHTML = printQuote(); 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
