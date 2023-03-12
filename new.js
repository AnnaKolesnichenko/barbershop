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


/*const hours = 14;
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


let link = 'https://my-site.com/about';
// Пиши код нижче за цей рядок
if(!link.endsWith('/')){
  link = link + '/';
}

// Пиши код вище за цей рядок
console.log(link);


let hour = prompt("What hour is now?", '');
if(hours < 17) {
  console.log('Pending');
}else if (hour >= 17 || hour <= 24) {
  console.log('Expires');
}else {
  console.log('Overdue');
}

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0){
  message = "Today";
}else if(daysUntilDeadline === 1){
  message="Tomorrow";
}else if (daysUntilDeadline === 2){
  message = 'Day after tomorrow';
}else {
  message = "Date in the future";
}
console.log(message);

switch(daysUntilDeadline) {
  case 0:
    console.log("Today");
    break;
  case 1:
    console.log("Tomorrow");
    break;
  case 2:
    console.log("Day after tomorrow");
    break;
  default:
    "Date in the future";
    break;
}


const minimum = 20;
const maximum = 100;
for(let i = minimum; i <= maximum; i++) {
  if(i%5 == 0) {
    console.log(i);
  } else {
    continue;
  }
}

const login = prompt("Enter your login please", '');
let password;
if (login === 'Admin') {

  const password = prompt('Enter your password?');
  if(password === 'I am admin') {
    console.log("welcome")
  }else {
    console.log('Wrong password');
  }
} else if (login === '' || login === undefined) {
  console.log('Cancelled');
} else {
  console.log("I do not recognize you");
}*/

const genres = ['Jazz', 'Blues'];
genres.push('rock-n-roll');
console.log(genres);
console.log(genres[0]);
console.log(genres[genres.length-1]);
genres.pop(-1);
console.log(genres);
genres.unshift('Trance', 'Electro');
console.log(genres);

const values = '8 11';
const nums = values.split(" ");
console.log(nums);
const square = nums[0] * nums[1];
console.log(square);

const namesA = 'Jacob,William,Solomon,Artemis';
const phonesA = '89001234567,89001112233,890055566377,890055566300';

const namesArr = namesA.split(" ");
const phonesArr = phonesA.split(" ");


const string = "Welcome to the future";
const newStrgin = string.split(" ");
console.log(newStrgin);
const anyStr = newStrgin.slice(1, newStrgin.length-1);
console.log(anyStr.join(" "));



/*Example 6 - Массивы и строки
Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.*/
const stringFly = 'Welcome to the future';
console.log(stringFly.split("").reverse().join(""));


/*Example 7 - Сортировка массива с циклом
Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.*/
const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
const langsSort = langs.sort();
console.log(langsSort);


/*Example 8 - Поиск элемента
Напиши скрипт поиска самого маленького числа в массиве. 
Код должен работать для любого массива чисел. 
Используй цикл для решения задачи.*/
const numbers = [2, 17, 94, 1, 23, 37];
let min;
for(let i = 0; i <= numbers.length; i++){
  min = 0;
  if(numbers[i] < numbers[i-1]) {
    min = numbers[i];
    console.log(min);
  }

}

//console.log(Math.min(2,17,94,1,23,37));
//let min = numbers[0];
//for(const num of numbers){
  //if(num<min) {min=num}
  const cart = [4,88,15,37];
  const newCart = [33,77,88,99];
  let total = 0;

  const calculateTotalPrice = function(arr) {
    for(const i of arr) {
      total = total + i;
    }
    console.log("Total: ", total );
    return total;
  }

  console.log(calculateTotalPrice(cart));
  console.log(calculateTotalPrice(newCart));

  
  const logins = ['admin', 'any', 'qwerty'];
  const findLogin = function(login, loginNeeded) {
    if(login.includes(loginNeeded)) {
      console.log("Succeed!")
      return loginNeeded;
    }else {
      return "Wrong login, try again!";
    }
  }
  console.log(findLogin(logins, 'admin'));
  console.log(findLogin(logins, 'aoppple'));


  const numberArr = [100,2,5,7,122,15];

  const findSmallest = function (arr) {
    let num = arr[0];
    for(const i of arr) {
      if(i<num) {
        num=i;
        return num;
      }
    }
  }
  console.log(findSmallest(numberArr));
 

