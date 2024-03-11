const book = {
  id: 1,
  title: "Freakonomics",
  authors: [
    {
      authorCode: 210,
      name: "Steven Levitt",
    },
    {
      authorCode: 211,
      name: "Stephen Dubner",
    },
  ],
  publisher: "William Morrow",
  isbn10: "006073132X",
  cost: 7.99,
};

book.coAuthor = {
  authorCode: 212,
  name: "Jyoti",
};

console.log(book);

const { title, publisher, authors, cost, year } = { ...book, year: 2005 };
console.log(year);

const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@email.com",
};

const banking = {
  accountType: "Savings",
  account: 123456,
  balance: 1000,
};

// let userDetail = Object.assign({}, user, banking);
let userDetail = { ...user, ...banking };

console.log(userDetail);
