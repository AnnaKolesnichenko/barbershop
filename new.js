const personOne = {
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
  let discount = 0;

  if(totalSpent >= 100 || totalSpent <=1000) {
    discount = '2%';
    console.log(`Processing an order for ${payments} with ${discount}`);
  }
  else if (totalSpent <= 5000) {
    discount = '5%';
    console.log(`Processing an order for ${payments} with ${discount}`);
  }
  else if (totalSpent > 5000) {
    discount = '10%';
    console.log(`Processing an order for ${payments} with ${discount}`);
  }else {
    console.log('You are not on any discount program, discount is 0');
  }


  //3
  const stars = 1;
  let price = prompt('Enter quantity of stars?', );

  if(price === '' || price === NaN) {
    console.log("There is no such star quantity hotel");
  }

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

  
