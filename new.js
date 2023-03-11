/*const personOne = {
    name: "Bob",
    age: 21
  };

  const personTwo = {
    name: "Mike",
    age: 47
  };
  
  function increaseAge(a) {
    const updatedPerson = Object.assign({}, personOne);
    updatedPerson.age += 1;
    return updatedPerson;
  }
  
  const updatedPerson = increaseAge(personOne);
  const updatedPersonNew = increaseAge(personTwo);
  console.log(personOne.age);
  console.log(updatedPerson.age);
  console.log(updatedPersonNew.age);


  let num = prompt("Enter your number? ");
  num = Number(num);
  console.log(num);

  console.log(Math.random());

  //Math.random() * (max-min)+min
  console.log(Math.floor(Math.random()*(10-7)+7));

  const colors = ['teal', 'orange', 'tomato', 'azure'];
  const max = colors.length - 1;
  const min = 0;

  const index = Math.round(Math.random() * (max-min) + min);
  const color = colors[index];
  console.log(color);

  //7.1
  let balance = 18000;
  const payment = 2000;
  let rest;
  let message;

  if(payment < balance) {
    rest = balance - payment;
    message = `There is ${rest} on the account`
    console.log(message);
  }
  else if (payment > balance) {
    message = 'There is not enough funds on the balance for this operation';
    console.log(message);
  }
  console.log('Operation finished. Thank you');

  //7.2
  const totalSpent = 2000;
  let payments = 500;
  let discPayment;
  let discount = 0;

  if(totalSpent >= 100 || totalSpent <=1000) {
    discount = 0.02;
  }
  else if (totalSpent <= 5000) {
    discount = 0.05;
  }
  else if (totalSpent > 5000) {
    discount = 0.1;
  }else {
    console.log('You are not on any discount program, discount is 0');
  }

  console.log(`Processing an order for ${payments} with ${discount * 100}`);
  discPayment = payments - (payments * discount);
  console.log(`To pay is ${discPayment}`);


  //3
 
  let stars = +prompt('Enter quantity of stars?', '');
  console.log(price);

  switch(stars) {
    case 1:
      console.log(`${stars} hotel costs ${20} dollars per night`);
      break;
    case 2:
      console.log(`${stars} hotel costs ${30} dollars per night`);
      break;
    case 3:
      console.log(`${stars} hotel costs ${50} dollars per night`);
      break;
    case 4:
      console.log(`${stars} hotel costs ${70} dollars per night`);
      break;
    case 5:
      console.log(`${stars} hotel costs ${120} dollars per night`);
      break;
  }

  
const employees = 7;
const minSal = 500;
const maxSal = 5000;
let totalSalary = 0;

for(let i = 1; i <= employees; i++) {
  let salary = Math.random() * (maxSal - minSal) + minSal;
  totalSalary += salary;
  console.log(`Salary of worker number ${i} - ${salary}`);
}

console.log(totalSalary);

const minim = 6;
const maxim = 13;
let total = 0;

for(let i = minim; i < maxim; i++) {
  if(i%2===0) {
    console.log(`Even ${i}`);
    total = total + i;
    
  }
  console.log(total);
}

const fruits = ['🍎1', '🍇2', '🍑3', '🍌4', '🍋5'];
for(const fruit of fruits) {
  let num = fruits.indexOf(fruit) + 1;
  console.log(num  + ':' + fruit);
}*/


/*const question = prompt("What is the official name of JavaScript?", " ");

if(question == 'ECMAscript') {
  console.log(alert("Correct!!"));
}else {
  console.log(alert("You do not know? ECMAScript"));
}*/


const hours = 14;
const minutes = 26;
let timestring;

if(minutes > 0) {
  console.log(`${hours} hours, ${minutes} minutes`);
} else {
  console.log(`${hours} hours`);
}


const userInput = prompt("Enter your number", '');

if (userInput > 0) {
  console.log("This is a positive number");
}else if (userInput < 0) {
  console.log("This is a negative number");
} else {
  console.log("This is zero");
}

//Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.
const a = 120;
const b = 180;

if(a > 100 && b > 100) {
  console.log(Math.max(a, b));
} else {
  console.log(b + 512);
}