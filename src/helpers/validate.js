/* eslint-disable */
const validate = (values) => {
  const {
    email,
    password,
    firstname,
    lastname,
    mobileNumber,
    country,
    passportNumber,
    role,
  } = values;
  const errors = {};

  if (!email) {
    errors.email = 'Email is Required';
  }
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(email)) {
    errors.email = 'Must be a Valid Email';
  }

  if (!password) {
    errors.password = 'Password is Required';
  }

  if (!firstname) {
    errors.firstname = 'First Name is Required';
  }
  if (firstname && /[^a-zA-Z]/.test(firstname)) {
    errors.firstname = 'Should only Contain Letters';
  }

  if (!lastname) {
    errors.lastname = 'Last Name is Required';
  }
  if (lastname && /[^a-zA-Z._-]/.test(lastname)) {
    errors.lastname = 'Should only Contain Letters';
  }

  if (!mobileNumber) {
    errors.mobileNumber = 'Mobile Number is Required';
  }
  if (mobileNumber && isNaN(Number(mobileNumber))) {
    errors.mobileNumber = 'This Must be a Number';
  }

  if (!country) {
    errors.country = 'Country is Required';
  }

  if (!passportNumber) {
    errors.passportNumber = 'Your Passport Number is Required';
  }
  if (passportNumber && /[^a-zA-Z0-9]/.test(passportNumber)) {
    errors.passportNumber = 'Must be a Valid Passport';
  }

  if (!role) {
    errors.role = 'Role is Required';
  }

  return errors;
};

export default validate;
