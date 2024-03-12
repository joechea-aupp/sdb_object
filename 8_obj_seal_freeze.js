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

/**
 * using Object.seal, seal will:
 * - forbit any configuration attempt on the object.
 * - add new property to the object.
 *
 * seal will allow:
 * - mutate properties value
 *
 * note: seal only work on the top level object
 * */
const deepSeal = (obj) => {
  Object.values(obj).forEach(
    (elem) => typeof elem === "object" && deepSeal(elem)
  );

  return !Object.isSealed(obj) && Object.seal(obj);
};

deepSeal(user);

// user.home.ph = "01112234";

/**
 * using Object.freeze, freeze will:
 * - forbit any attempt to modified the object
 *
 * note: freeze only work on the top level object
 */
const user2 = {
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
const deepFreeze = (obj) => {
  Object.values(obj).forEach(
    (elem) => typeof elem === "object" && deepFreeze(elem)
  );

  return !Object.isFrozen(obj) && Object.freeze(obj);
};

deepFreeze(user2);
// user2.home.city = "Phnom Penh";
