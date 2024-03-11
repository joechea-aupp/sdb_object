// descripter is used to govern the behavior of the property
"use strict";

const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@email.com",
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

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

Object.defineProperty(tsla, "sIdx", {
  writable: false,
});

// tsla.sIdx = 201325;

Object.defineProperty(tsla, "stName", { enumerable: false });

for (let prop in tsla) {
  console.log(prop);
}
