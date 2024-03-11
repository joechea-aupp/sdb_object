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

const { title, publisher, authors, cost } = book;

console.log(
  `${title} is published by ${publisher} and written by ${authors
    .map((el) => el.name)
    .join(" and ")}. It costs $${cost}.`
);

const tsla = {
  sIdx: 201324,
  stName: "TSLA",
  stCurrPrc: 836.16,
  stExc: "NASDAQ",
  stDetails: {
    name: "Tesla Inc",
    ceo: "Elon Musk",
    hq: "Palo Alto, California",
  },
};

let {
  stName: stock,
  stCurrPrc: value,
  stExc: exchange,
  stDetails: { name: company, ceo, hq },
  ...rest
} = tsla;

console.log(`${stock} is traded at ${exchange} at $${value}.`);
console.log(`${company} is led by ${ceo} and headquartered in ${hq}.`);
console.log(rest);
