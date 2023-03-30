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

/*const genres = ['Jazz', 'Blues'];
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

/*const namesA = 'Jacob,William,Solomon,Artemis';
const phonesA = '89001234567,89001112233,890055566377,890055566300';

const namesArr = namesA.split(" ");
const phonesArr = phonesA.split(" ");*/


/*const string = "Welcome to the future";
const newStrgin = string.split(" ");
console.log(newStrgin);
const anyStr = newStrgin.slice(1, newStrgin.length-1);
console.log(anyStr.join(" "));



Example 6 - Массивы и строки
Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.
const stringFly = 'Welcome to the future';
console.log(stringFly.split("").reverse().join(""));


Example 7 - Сортировка массива с циклом
Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.
const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
const langsSort = langs.sort();
console.log(langsSort);


Example 8 - Поиск элемента
Напиши скрипт поиска самого маленького числа в массиве. 
Код должен работать для любого массива чисел. 
Используй цикл для решения задачи.
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


 //functions
 function calcBMI(weight, height) {
  weight = Number(weight.replace(',', '.'));
  height = Number(height.replace(',', '.'));

  return (weight/ height**2).toFixed();
 }

 const bmi = calcBMI('88,3', '1.75');
 console.log(bmi);


 //find minimal of numbers
 function min(a, b) {
  let number = a;
  if(a > b) {
    number = b;

  }
  return number;
 }

 console.log(min(2,4));
 console.log(min(3, -1));
 console.log(min(1,1));


 //get square
 function getRectArea(dimensions) {
  const dimens = dimensions.split(" ");
  
  const square = dimens[0] * dimens[1];
  return square;

 }
 console.log(getRectArea('8 11'));


 //log of numbers---------------------------------------------------
function printContactsInfo(names, phones) {
  const namesArr = names.split(' ');
  const phonesArr = phones.split(' ');

  for(let i = 0; i <= namesArr.length; i++) {
    for(let j = 0; j <= phonesArr.length; j++) {
      const newItem = namesArr[i] + phonesArr[j];
      console.log(newItem);
      return newItem;

    }
  }

}
console.log(printContactsInfo('Jacob,William,Solomon,Artemis', 
'89001234567,89001112233,890055566377,890055566300'));
//---------------------------------------------------------------------

//max element
function findLargestNumber(numbers) {
  let largest = numbers[0];
  for(const num of numbers) {
    if(num > largest) {
      largest = num;
    }
  }
  return largest;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//average meaning
function calAverage(...args) {
  let sum = 0;
  let average = 0;
    for(const arg of args) {
      sum += arg;
      average = sum / args.length;
    }

  return average;
}
console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

function calculate() {
  const array = Array.from(arguments);

  let sum = 0;
  let average = 0;
  for(const i of array) {
    sum += i;
    average = sum / array.length;
  }
  return average;
}
console.log(calculate(1, 2, 3, 4)); // 2.5
console.log(calculate(14, 8, 2)); // 8
console.log(calculate(27, 43, 2, 8, 36)); // 23.2

//formating time
/*Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"


//courses colleciton
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
function addCourse(name) {
  if(courses.includes(name)) {
    console.log("You already have a course like this");
  } else{ 
    return courses.push(name);
  }
}


function removeCourse(name) {
  const index = courses.indexOf(name);

  if(index === -1) {
    console.log("There is no course with this name");
  }

  for(let i = 0; i <= courses.length; i++) {
    if(courses[index] == name) {
      const newCourse = courses.splice(index, 1);
      return newCourse;
    }
  }
}


function updateCourse(oldName, newName) {
  const index = courses.indexOf(oldName);
  for(let i = 0; i <= courses.length; i++) {
    if(courses[index]) {
      newList = courses.splice(index, 1, newName);
    }
  }
  return newList;

}


addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Ви вже маєте такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']*/

/*const apples = +prompt('how many apples are there? ', ''); 
const grapes = +prompt('How many grapes are there? ',''); 

if(Number(apples) > Number(grapes)) {
  console.log(apples-grapes);
}else if(Number(grapes) > Number(apples)){
  console.log(grapes-apples);
}


  function getGrade (s1, s2, s3) {
    // Code here
    let num = (s1 + s2 + s3)/3;
    if (num >= 90 && num <= 100) {
      return 'A';
    }else if (num >= 80 && num < 90) {
      return 'B';
    } else if(num >= 70 && num < 80) {
      return 'C';
    }else if(num >= 60 && num < 70) {
      return 'D';
    } else {
      return 'F';
    }
  }


console.log(getGrade(95,90,93));*/

function getGrades(s1, s2, s3){
  let num = (s1 + s2 + s3)/3;
  switch(true) {
    case (num >= 90 && num <= 100):
      console.log('a');
      return 'A';
      break;
    case (num >= 80 && num < 90):
      console.log('b');
      return 'B';
      break;
    case (num >= 70 && num < 80):
      console.log('c');
      return 'C';
      break;
    case (num >= 60 && num < 70):
      return 'D';
      break;
    deafult:
    return 'F';
  }
}
getGrades(82,85,87);
getGrades(100, 85, 96);
getGrades(70, 70, 70);

function boolToWord(bool){
  //...
  
  return bool ? 'yes' : 'no';


  }
  console.log(boolToWord(55));


  function boolToWord(x){
    //...
    if(!x) {
      return "Yes";
    }else {
      return "No";
    }
  }
  console.log(boolToWord(''));


  function digitize(n) {
    //code here
    let num = String(n);
    console.log(typeof(num));
    console.log(num);
    let arr = num.split("").reverse();
    return arr;
  
  }
  console.log(digitize(35231));

  function findNeedle(haystack) {
    // your code here
    for(let i = 0; i <= haystack.length; i ++){
      if(haystack[i] == 'needle') {
        console.log(`found the ${haystack[i]} at posiiton ${i}`);
        break;
      }
    }
  }
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk","apple", "needle", "randomJunk"]);

  function repeatStr (n, s) {
    let str = '';
    for (let i = 1; i <=n; i++){
      str += s;
    }
    return str;
  }
  console.log(repeatStr(3, "a"));

  const reverseSeq = n => {
    let arr = [];
    for(let i = 1; i <= n; i ++) {
      arr.push(i);
    }
    
    return arr.reverse();
  };

  console.log(reverseSeq(5));


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      const smallest = Math.min(...args);
      console.log(smallest);
      return smallest;
      
    }
  }

  function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
  
      
      return dna.replaceAll("T", "U");     
     }


  console.log(DNAtoRNA("TTTT"));
  
  function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    classPoints.push(yourPoints);
    let total = 0;
    for(const i of classPoints) {
      total += i;
    }

    total = total/classPoints.length;
    return total < yourPoints;

     
    //if((total / classPoints.length)>= yourPoints) {
      //return false;
    //} else {
      //return true;
    //}
  }

  console.log(betterThanAverage([2,3], 5));
  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
  console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
  console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));


  function maps(x) {
    return x.map (x => x**2);
  }
  console.log(maps([1, 2, 3]));

///
  function squareSum(numbers){
    let total = 0;

    numbers.map(x => {
      total += x**2});
    return total;

  }

  console.log(squareSum([1,2]));

////
function lovefunc(flower1, flower2){
  // moment of truth
  if(flower1 % 2 == 0 && flower2 % 2 == 0){
    return false;
  }
  return true;
}

console.log(lovefunc(2,2));

///
const min = function(list) {
  let minim = list[0];
  for(let i = 0; i <= list.length; i++) {
    if (list[i] < minim) {
      minim = list[i];
    }
  }
  return minim;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

const max = function(list) {
  let maxim = list[0];
  for(let i = 0; i <= list.length; i++) {
    if (list[i] > maxim) {
      maxim = list[i];
    }
  }
  return maxim;
}

console.log(max([4,6,2,1,9,63,-134,566]));


///
function invert(array) {
  const arrNew = array.map(x => x * -1);
  return arrNew;
}
console.log(invert([1,2,3,4,5]));
console.log(invert([1, -2, 3, -4, 5]));


///
function feast(beast, dish) {
  //your function here
  if (beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)) {
    return true;
  }
  return false;
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));


///
function areYouPlayingBanjo(name) {
  if(name.at(0).toLowerCase() === 'r' && name.at(0).toUpperCase() === 'R') {
    return name + " plays banjo";
  }
  return name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("ringo"));

///
function longest(s1, s2) {
  let str = s1 + s2; 
  str.split("");
  let result = [];
  for(const i of str) {
    if(!result.includes(i)) {
      result.push(i);
    }
  }
  return result.sort().join('');
}
  
console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

///
function oddOrEven(array) {
  //enter code here
 let total = 0;
 for(const i of array) {
   total += i;
 }
 if(total % 2 == 0) {
   return "even";
 }else {
   return "odd";
 }
}

console.log(oddOrEven([0, 1]));
console.log(oddOrEven([1,2,3,4]));

///
const stringToNumber = function(str){
  // put your code here
  
  return Number(str);
}
console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));

///
function highAndLow(numbers){
  // ...
  let result = '';
  const arr = numbers.split(" ");

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  result =  max + " " + min;


  return result;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

///
function countProps(object) {
  // Change code below this line
  let propCount = 0;

  const keys = Object.keys(object);
  console.log(keys);

  for (const key of keys) {
    
      propCount += 1;
    
  }

  return propCount;
  // Change code above this line
}

console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


///
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  for(val of values) {
    totalSalary += val;
  }

  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

///
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  for(const item of products) {
    if (item.name === productName) {
      return item.price;
    }
  }
  return null;
}

  console.log(getProductPrice("Grip"));


///
const product = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let arrValues = [];
  for(const i of product) {
    
    if (i[propName] !== undefined) { 
      arrValues.push(i[propName]) 
    } 
  } 
  return arrValues; 
}

console.log(getAllPropValues("category"));

///
function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  for(const item of product) {
    if (item.name === productName) {
      return item.price * item.quantity;
    }
    
  }
  return 0;
  // Пиши код выше этой строки
}
console.log(calculateTotalPrice('Radar'));
console.log(calculateTotalPrice('Grip'));
console.log(calculateTotalPrice('Blast'));

///
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

function add(...args) {
  let result = 0;
  for(const i of args) {
    result += i;
  }
  return result;
  // Change code above this line
  
}
console.log(add(15, 27));
console.log(add(32, 6, 13, 19, 8));

///
function formatMess(message, maxLength) {
  let result;
  if(message.length <= maxLength) {
    result = message;
  } else {
    result =  message.slice(0, maxLength) + ('...');
  }
  return result;
}

console.log(formatMess("Curabitur ligula sapien", 16));
console.log(formatMess("Curabitur ligula sapien", 23));

///
const atTheOldToad = {
  // Change code below this line
  potions: this.atTheOldToad.potions;



  // Change code above this line
};



