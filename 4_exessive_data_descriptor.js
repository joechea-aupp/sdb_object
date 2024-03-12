"use strict";

const User = function () {
  let name = "",
    age = 0,
    change = [];

  Object.defineProperties(this, {
    // using data descriptor
    id: {
      enumerable: true,
      value: `UID-${parseInt(Math.random() * 30000)}-XZ`,
    },
    // using exessive descriptor
    name: {
      enumerable: true,
      get() {
        return name;
      },
      set(val) {
        change.push(`name set to ${val}`);
        name = val.toUpperCase();
      },
    },
    age: {
      enumerable: true,
      get() {
        return age;
      },
      set(val) {
        change.push(`age set to ${val}`);
        age = val;
      },
    },
    change: {
      enumerable: false,
      get() {
        return change;
      },
    },
  });
};
