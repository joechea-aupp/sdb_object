"use strict";

const book1 = {
  id: 1,
  title: "Freakonomics",
  publisher: "Harper Torch",
  cost: 7.99,
  isbn10: "0-06-124270-5",
  overview() {
    return `${this.title}, published by ${this.publisher} retails for $${this.cost}`;
  },
};

const book2 = {
  id: 2,
  title: "Jurassic Park",
  publisher: "Arrow",
  cost: 4.99,
};

const props = Object.getOwnPropertyNames(Object.prototype);
console.log(props);

console.log("title" in book1);
console.log("toString" in book1);

console.log(book1.hasOwnProperty("overview"));
console.log(book1.hasOwnProperty("toString"));

const showDetails = (book) =>
  book.hasOwnProperty("overview")
    ? console.log(book.overview())
    : console.log("Uable to show details...");

showDetails(book1);
showDetails(book2);
