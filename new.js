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
