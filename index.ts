// // Processing text data with regular expressions

// // Task 1 - Find all occurences of Spain

const text :string ="The rain in  stays mainly in the plain. In , in April, the rain is a pain";

const regEx :RegExp = /Spain/g;
const matchedSpain: Array<string> | null = text.match(regEx);
console.log(matchedSpain);



// // Task 2 - Find positions of rain


const regEx2 :RegExp = /rain/g;
const matchedRain :string | null= [...text.matchAll(regEx2)];
matchedRain.forEach((match) => console.log(`rain is ${match.index}`));

// // Task 3 - Replace first 'Spain' with 'France'

const regEx3 :RegExp = /Spain/;
const replaceSpain : string | null = text.replace(regEx3, "France");
console.log(replaceSpain);

// // Task 4 - Replace all 'rain' with 'sun'

const regEx4 : RegExp = /rain/g;
const replaceAllRain : string | null= text.replaceAll(regEx4, "sun");

console.log(replaceAllRain);

// // Task 5 - Search for plain

const regEx5:RegExp = /plain/g;
const positionOfPlain : string | null = text.search(regEx5);

console.log(positionOfPlain);

// Task  - Validation Function Task

const nameRegex:RegExp = /^[a-z ,.'-]+$/i;
const ageRegex:RegExp= /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
const phoneRegex:RegExp =
  /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;
const emailRegex:RegExp = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
const passwordRegex:RegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const myName:string = "Roya";
const myAge:number= 25;
const myPhone:string = "0701232323";
const myMail:string = "royayusifbay@gmail.com";
const myPassword:string = "eacamp123-Roya";

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
