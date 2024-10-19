const stringLength = "Test of a string length";
stringLength.length;

console.log(stringLength.length);

//string character retrieval

const birthday = "2004";

console.log(birthday[2]);

console.log(birthday[0]);

//string substring containment check

const email = "aldencua2403@gmail.com";

if (email.includes("@", ".com")) {
  console.log("Email is valid");
} else {
  console.log("Email is invalid");
}

const invalidCharac = ["@", "!", "#", "$", "%", "^", "&", "*", "(", ")"];

if (email.includes(invalidCharac)) {
  console.log("Username is invalid, no special characters allowed");
} else {
  console.log("Username valid");
}

//case change

console.log(email.toUpperCase());
