// Function to display quotes
function displayQuotes(quotesToDisplay) {
    const quotesContainer = document.getElementById('quotes-list');
    quotesContainer.innerHTML = ''; // Clears the container everytime it runs

    // Check if there are NO quotes to display BEFORE the loop
    if (quotesToDisplay.length === 0) {
        const noQuotesMessage = document.createElement('p');
        noQuotesMessage.innerHTML = `<div class="container"><h2>No quotes found for the selected filter.</h2></div>`;
        quotesContainer.appendChild(noQuotesMessage);
        console.log('No quotes to display after filtering.');
        return; // Exit the function
    }

    // If quotes exist, loop through each quote and create HTML elements
    quotesToDisplay.forEach(quote => {
        // Create a container for each quote with a class name
        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote-item';

        // Create elements for quote text & author
        const quoteText = document.createElement('p');
        quoteText.className = 'quote';
        quoteText.textContent = quote.quote;

        const authorElement = document.createElement('p');
        authorElement.className = 'author';
        authorElement.textContent = `— ${quote.author}`;

        // Add elements to the quote container
        quoteElement.appendChild(quoteText);
        quoteElement.appendChild(authorElement);

        // Add the quote to the main container
        quotesContainer.appendChild(quoteElement);
    });
}

function loadQuotes() {
    // Access the quotes data from quoteData.js
    const quotes = quotesData;

    console.log('Quotes data loaded:', quotes);

    // AUTHOR FILTERS
    // Get unique authors from the quotes data to avoid duplicates in the filter dropdown
    const uniqueAuthors = [...new Set(quotes.map(quote => quote.author))];
    uniqueAuthors.sort();

    // Populate the author filter dropdown with unique authors
    const authorSelect = document.getElementById('filter-author');
    
    // Individual author options
    uniqueAuthors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorSelect.appendChild(option);
    });

    // CATEGORY FILTERS
    // Get unique categories from the quotes data to avoid duplicates in the filter dropdown
    const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
    uniqueCategories.sort();
    
    // Populate the category filter dropdown with unique categories
    const categorySelect = document.getElementById('filter-category');
    
    // Individual category options
    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    
    // display quotes sorting it by author name in alphabetical order
    quotes.sort((a, b) => a.author.localeCompare(b.author));

    // Display all quotes
    displayQuotes(quotes);

    // Add event listener to filter button
    const filterBtn = document.getElementById('apply-filter-btn');
    filterBtn.addEventListener('click', () => {
        const selectedAuthor = authorSelect.value;
        const selectedCategory = categorySelect.value;
        // Filter quotes based on selected author
        let filteredQuotes = quotes;
        if (selectedAuthor) {
            filteredQuotes = quotes.filter(quote => quote.author === selectedAuthor);
        }

        // Further filter by category if selected
        if (selectedCategory) {
            filteredQuotes = filteredQuotes.filter(quote => quote.category === selectedCategory);
        }

        // Display filtered quotes
        displayQuotes(filteredQuotes);
    });
}


document.addEventListener('DOMContentLoaded', loadQuotes);