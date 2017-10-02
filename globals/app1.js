global.name = "Sairam";
var age  = 26;
var message = "Help others";
//exports = {age : age}; // Setting exports to an object will always give {}

//exports.age = age; // This is correct

// This is same as above and works fine
module.exports = {
  age : age
};

