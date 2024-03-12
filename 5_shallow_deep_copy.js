"use strict";

const user = {
  id: 1,
  name: "Joe M",
  age: 20,
  home: {
    address: "121, Prive Lane, New Donutshire",
    city: "Boston",
    state: "MA",
    country: "US",
    favColors: ["Red", "Black"],
    loc: {
      lat: 61.2039,
      long: 34.2019,
    },
  },
};

const deepCopy = function (obj) {
  let tempObj = {};
  for (let key in obj) {
    tempObj = {
      ...tempObj,
      [key]:
        //   check of key is object type and is not array
        typeof obj[key] === "object" && !Array.isArray(obj[key])
          ? { ...deepCopy(obj[key]) }
          : // if key is object type and is array then spread array item
          typeof obj[key] === "object" && Array.isArray(obj[key])
          ? [...obj[key]]
          : //   otherwise return key's value
            obj[key],
    };
  }
  return tempObj;
};

// let joe = { ...user };
let joe = deepCopy(user);

joe.age = 22;
joe.home.address = "157, Lotus Lane, Flowerville";
console.log(joe);
