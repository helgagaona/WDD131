const articles = [
	{
	id: 1,
	title: "Septimus Heap Book One: Magyk",
	date: "July 5, 2022",
	description:
	"If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
	imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
	imgAlt: "Book cover for Septimus Heap 1",
	ages: "10-14",
	genre: "Fantasy",
	stars: "⭐⭐⭐"
	},
	{
	id: 2,
	title: "Magnus Chase Book One: Sword of Summer",
	date: "December 12, 2021",
	description:
	"The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
	imgSrc:
	"https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
	imgAlt: "Book cover for Magnus Chase 1",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐"
	},
	{
	id: 3,
	title: "Belgariad Book One: Pawn of Prophecy",
	date: "Feb 12, 2022",
	description:
	"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
	imgSrc:
	"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
	imgAlt: "Book cover for Pawn of Prophecy",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐⭐"
	}
	];

const mainContainer = document.querySelector('.main-container');

function generateArticleHTML(item) {
    return `
        <div class="grid">
                <div class="book-details">    
                    <h2 class="date">${item.date}</h2>
                    <h3>${item.ages}</h3>
                    <h3>${item.genre}</h3>
                    <p>${item.stars}</p>
                </div>
                <div class="book-cover">
                    <div class="book-title"><h2>${item.title}</h2></div>
                    <div class="id"></div>
                    <img class="book-cover" src="${item.imgSrc}" alt="${item.imgAlt}">
                    <p class="description">${item.description}</p>   
                </div>            
        </div>
    `;
}

function insertArticles() {
    articles.forEach((article) => {
        const articleHTML = generateArticleHTML(article);
        mainContainer.insertAdjacentHTML('beforeend', articleHTML);
    });
}

document.addEventListener('DOMContentLoaded', insertArticles);