const formSubmit = document.querySelector("main .form form");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  formSubmit.reset();
  alert("Form sent.");
});
