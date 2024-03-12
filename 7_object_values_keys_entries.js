"use stricts";

const user = {
  id: 1,
  name: "Joe M",
  age: 20,
  address: "121, Private Lane, New Donutshire",
  city: "Boston",
  state: "MA",
  country: "US",
};

// using Object.keys
console.log(Object.keys(user));

if (Object.keys(user).includes("country")) {
  console.log(user.country);
}

// using Object.values
console.log(Object.values(user));
const findVal = (val, obj) => Object.values(obj).includes(val);
console.log(findVal("MA", user));

// using Object.entries
console.log(Object.entries(user));
for (let [key, val] of Object.entries(user)) {
  console.log(key, val);
}

// restructuring deepcopy function using Object.entries
const users = {
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
  for (let [key, val] of Object.entries(obj)) {
    tempObj = {
      ...tempObj,
      [key]:
        //   check of key is object type and is not array
        typeof val === "object" && !Array.isArray(val)
          ? { ...deepCopy(val) }
          : // if key is object type and is array then spread array item
          typeof val === "object" && Array.isArray(val)
          ? [...val]
          : //   otherwise return key's value
            val,
    };
  }
  return tempObj;
};

// let joe = { ...user };
let joe = deepCopy(users);

joe.age = 22;
joe.home.address = "157, Lotus Lane, Flowerville";
console.log(joe);
console.log(users);
