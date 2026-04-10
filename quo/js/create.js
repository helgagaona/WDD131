
const moodScoreMap = { low: 3, medium: 6, high: 9 };

let userQuotes = [];

function addQuote() {
  const quote    = document.getElementById('quoteInput').value.trim();
  const author   = document.getElementById('authorInput').value.trim();
  const category = document.getElementById('categorySelect').value;
  const mood     = document.getElementById('moodSelect').value;

  // Validation
  if (!quote) {
    alert('Please enter a quote');
    return;
  }
  if (quote.length < 50) {
    alert('Quote must be at least 50 characters');
    return;
  }
  if (!author) {
    alert("Please enter an author's name");
    return;
  }

  const newQuote = {
    author:   author,
    quote:    quote,
    score:    moodScoreMap[mood],
    category: category
  };
  userQuotes.push(newQuote);

  console.log('Quote Added!', newQuote);

  displayMyQuotes();
  clearForm();
}

function displayMyQuotes() {
  const myQuotesList = document.getElementById('my-quotes-list');
  if (!myQuotesList) return;

  if (userQuotes.length === 0) {
    myQuotesList.innerHTML = '<p>No quotes submitted yet.</p>';
    return;
  }

  myQuotesList.innerHTML = userQuotes.map(q => `
    <section id="quotes-list" class="section-width">
    <div class="quote-item">
      <p class="quote">${q.quote}</p>
      <p class="author">-- ${q.author} / ${q.category}</p>
    </div>
    </section>
  `).join('');
}

function clearMyQuotes() {
  userQuotes = [];
  displayMyQuotes();
}

function clearForm() {
  document.getElementById('quoteInput').value = '';
  document.getElementById('authorInput').value = '';
  document.getElementById('categorySelect').selectedIndex = 0;
  document.getElementById('moodSelect').selectedIndex = 0;
}

document.addEventListener('DOMContentLoaded', () => {
  displayMyQuotes();
  document.getElementById('submitQuoteBtn').addEventListener('click', addQuote);
});