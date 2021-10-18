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
    citation: '1983 interview with Bob McKenzie',
    tags: 'Sports'
  },
  {
    quote: 'A great man is always willing to be little',
    source: 'Ralph Waldo Emerson',
    year: '1841'
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly.',
    source: 'John F. Kennedy',
    tags: 'Politics'
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
  let randomQuote = getRandomQuote();
  let quoteString = `<p class="quote">${randomQuote.quote}</p>
                     <p class="source">${randomQuote.source}`;

  if(randomQuote.citation) {
    quoteString += `<span class="citation"> ${randomQuote.citation}</span>`;
  } 
  
  if(randomQuote.year) {
    quoteString += `<span class="year"> ${randomQuote.year}</span>`;
  } 
  
  if(randomQuote.tags){
    quoteString += `<span class="citation"> ${randomQuote.tags}</span>`;
  }

    quoteString += '</p>';

  return quoteString
}

function getRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let randomRGB = 'rgb(' + x +',' + y + ',' + z + ')';
  if(printQuote()) {
    document.body.style.backgroundColor = randomRGB;
  }
  return randomRGB;
}

window.setInterval(refresh, 20000);

function refresh() {
  window.location.reload();
}

document.getElementById('quote-box').innerHTML = printQuote();
document.querySelector('main').innerHTML = getRandomColor();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
