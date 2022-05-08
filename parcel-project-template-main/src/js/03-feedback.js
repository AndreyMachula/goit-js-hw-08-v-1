import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector(".feedback-form");

// Vault key
const FORM_KEY = "feedback-form-state";

// Getting field values and storing them in storage
const onFormInput = () => {
  const formData = new FormData(feedBackForm);
  let userForm = {};
  formData.forEach((value, name) => userForm[name] = value.trim());
  localStorage.setItem(FORM_KEY, JSON.stringify(userForm));
};

// Adding a listener to a form and updating in 500 milliseconds
feedBackForm.addEventListener("input", throttle(onFormInput, 5000));


// Getting data from local storage
const onPopulateForm = () => {
  if (localStorage.getItem(FORM_KEY)) {
    Object.entries(JSON.parse(localStorage.getItem(FORM_KEY)))
    .forEach(([name, value]) => feedBackForm.elements[name].value = value);
  }
};

onPopulateForm(); 

// Form submit
const onFormSubmit = event => {
  event.preventDefault();
  
  if (feedBackForm.elements.email.value === "" || feedBackForm.elements.message.value === "") {
    return alert("Пожалуйста, заполните все поля!");
  }

  if (feedBackForm.elements.email.value && feedBackForm.elements.message.value !== "") {
      console.log('Отправляем форму с данными: ', JSON.parse(localStorage.getItem(FORM_KEY)));
      event.currentTarget.reset();
      localStorage.removeItem(FORM_KEY);
  };
};
  
feedBackForm.addEventListener("submit", onFormSubmit);