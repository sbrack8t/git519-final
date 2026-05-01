"use strict";

let submit = selElement("contact-form-submit");

submit.addEventListener("click", validateForm);

function selElement(id) {
  return document.getElementById(id);
}

function validateForm(e) {
  e.preventDefault();

  const submissionState = {
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
  };

  let userSubmission = {};

  const formValidation = {
    firstName: {
      valid: false,
      message: "Please enter first name",
    },
    lastName: {
      valid: false,
      message: "Please enter your last name",
    },
    email: {
      valid: false,
      message: "Please enter a valid last name",
    },
    comment: {
      valid: false,
      message: "The comment field cannot be empty",
    },
  };

  let firstName = selElement("contact-first-name");
  let lastName = selElement("contact-last-name");
  let email = selElement("contact-email");
  let comment = selElement("contact-comments");

  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
  let phoneRegEx = /[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
}
