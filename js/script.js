"use strict";

let submit = selElement("contact-form-submit");

submit.addEventListener("click", validateForm);

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
    message: "Please enter a valid email address",
  },
  phone: {
    valid: false,
    message: "Please enter a valid phone number",
  },
  comment: {
    valid: false,
    message: "The comment field cannot be empty",
  },
};

function selElement(id) {
  return document.getElementById(id);
}

function showMessage(obj) {
  let messageBlock = selElement("form-message");

  let output = `
  <div class="message">
      <h3 class="message-header">Thank you</h3>
      <div class="message-body">
        <p>You entered the following information:</p>
        <ul class="message-list">
          <li><strong>Name: </strong> ${obj.firstName} </li>
          <li><strong>Last Name: </strong> ${obj.lastName}</li>
          <li><strong>Email:</strong>  ${obj.email}</li>
          <li><strong>Phone: </strong> ${obj.phone}</li>
          <li><strong>Communication Preference: </strong>${obj.preference}</li>
          <li><strong>Comments:</strong> <br/> ${obj.comment}</li>
        </ul>
      </div>   
    </div>
  `;

  messageBlock.innerHTML = output;
}

function toggleError(elem, type, visible) {
  let errorBlock = elem.nextElementSibling;
  console.log(errorBlock);

  if (visible) {
    elem.classList.add("error");
    errorBlock.removeAttribute("hidden");
    errorBlock.setAttribute("aria-hidden", "false");
    errorBlock.textContent = formValidation[type].message;
    formValidation[type].valid = false;
  } else {
    elem.classList.remove("error");
    errorBlock.setAttribute("hidden", "");
    errorBlock.setAttribute("aria-hidden", "true");
    formValidation[type].valid = true;
  }
}

function validateForm(e) {
  e.preventDefault();

  let userSubmission = {};

  let firstName = selElement("contact-first-name");
  let lastName = selElement("contact-last-name");
  let email = selElement("contact-email");
  let comment = selElement("contact-comments");
  let phone = selElement("contact-phone");

  let preference = document.querySelector(
    "#contact-method-preference input[checked]",
  );

  console.log(preference);

  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
  let phoneRegEx = /[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;

  if (firstName.value != "") {
    toggleError(firstName, "firstName", false);
  } else {
    toggleError(firstName, "firstName", true);
  }

  if (lastName.value != "") {
    toggleError(lastName, "lastName", false);
  } else {
    toggleError(lastName, "lastName", true);
  }

  if (email.value != "" && emailRegEx.test(email.value)) {
    toggleError(email, "email", false);
  } else {
    toggleError(email, "email", true);
  }

  if (phone.value != "" && phoneRegEx.test(phone.value)) {
    toggleError(phone, "phone", false);
  } else {
    toggleError(phone, "phone", true);
  }

  if (comment.value != "") {
    toggleError(comment, "comment", false);
  } else {
    toggleError(comment, "comment", true);
  }

  console.dir(formValidation);

  console.log(comment.value);

  if (
    formValidation.firstName.valid &&
    formValidation.lastName.valid &&
    formValidation.email.valid &&
    formValidation.comment.valid &&
    formValidation.phone.valid
  ) {
    // create object
    userSubmission.firstName = firstName.value;
    userSubmission.lastName = lastName.value;
    userSubmission.email = email.value;
    userSubmission.phone = phone.value;
    userSubmission.comment = comment.value;
    userSubmission.preference = preference.value;

    //clear form
    selElement("contact-form").reset();

    // Show message
    showMessage(userSubmission);
  }
}
