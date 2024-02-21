// // Processing text data with regular expressions

// // Task 1 - Find all occurences of Spain
const text =
  "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain";

const regEx = /Spain/g;
const matchedSpain = text.match(regEx);
console.log(matchedSpain);

// // Task 2 - Find positions of rain

const regEx2 = /rain/g;
const matchedRain = [...text.matchAll(regEx2)];
matchedRain.forEach((match) => console.log(`rain is ${match.index}`));

// // Task 3 - Replace first 'Spain' with 'France'

const regEx3 = /Spain/;
const replaceSpain = text.replace(regEx3, "France");
console.log(replaceSpain);

// // Task 4 - Replace all 'rain' with 'sun'

const regEx4 = /rain/g;
const replaceAllRain = text.replaceAll(regEx4, "sun");

console.log(replaceAllRain);

// // Task 5 - Search for plain

const regEx5 = /plain/g;
const positionOfPlain = text.search(regEx5);

console.log(positionOfPlain);

// Task  - Validation Function Task

const nameRegex = /^[a-z ,.'-]+$/i;
const ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
const phoneRegex =
  /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;
const emailRegex = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const myName = "Roya";
const myAge = 25;
const myPhone = "0701232323";
const myMail = "royayusifbay@gmail.com";
const myPassword = "eacamp123-Roya";

function validateFunc(name, age, phone, email, password) {
  if (nameRegex.test(name) === true) {
    console.log("name is valid");
  } else {
    console.log("name is not valid");
  }
  if (ageRegex.test(age) === true) {
    console.log("age is valid");
  } else {
    console.log("age is not valid");
  }
  if (phoneRegex.test(phone) === true) {
    console.log("phone is valid");
  } else {
    console.log("phone is not valid");
  }
  if (emailRegex.test(email) === true) {
    console.log("email is valid");
  } else {
    console.log("email is not valid");
  }
  if (passwordRegex.test(password) === true) {
    console.log("password is valid");
  } else {
    console.log("password is not valid");
  }
}

validateFunc(myName, myAge, myPhone, myMail, myPassword);
