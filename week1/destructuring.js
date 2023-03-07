//problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [,otherRandomCar] = cars
//predictions; randomCar=Tesla, otherRandomCar=Mercedes
console.log(randomCar)
console.log(otherRandomCar)


//problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {name:othername} = employee;
//predictions; name=error(name not defined because it was changed to 'othername'), othername= wont run due to error preceding it
console.log(name);
console.log(othername);


//problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const {password:hashedPassword} = person;
//predictions password = '12345', hashedPassword=undefined because it existed before we destructured.
console.log(password);
console.log(hashedPassword);


//problem 4
const numbers = [8,2,3,5,6,1,67,12,2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//predictions False, True
console.log(first == second);
console.log(first == third);

//problem 5
const lastTest = {
    key: 'value',
    secondKey: [1,5,1,8,3,3]
}
const {key} = lastTest;
const {secondKey} = lastTest;
const [,willThisWork] = secondKey;
//predictions; 'value'; all numbers; 1 ;  5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);