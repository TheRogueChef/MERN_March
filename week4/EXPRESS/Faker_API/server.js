const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

// keep these right under the imports
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// faker just uses random info from the 'fakerAPI'. We use this in lieu of a connected DB
const createUser = () => {
    return { 
      password: faker.internet.password(),
      email: faker.internet.email(),
      phone_number: faker.phone.number(),
      last_name: faker.name.lastName(),
      first_name: faker.name.firstName(),
      _id: faker.datatype.uuid() 
    }};

const createCompany = () => {
  return {
      _id: faker.datatype.uuid(),
      name:faker.name.fullName(),
      address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country()
  }}};

// create a variable for 'user' info, the respond(res) with new variable name  
app.get("/api/users/new", (req, res) => {
  const user = createUser()
    res.json( user );
});

app.get("/api/companies/new", (req, res) => {
  const company = createCompany()
    res.json( company );
});

// create new variables for the two bits on info, but call the key variable the same as the URL names(ex: user/company must match lines 37 & 38 keys)
app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  const everything = {
    user: newUser,
    company: newCompany,
  };
  res.json( everything )
  });

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );