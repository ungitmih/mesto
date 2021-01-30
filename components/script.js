let popup = document.querySelector(".popup");
popup.classList.remove("popup_opened");
let buttonEdit = document.querySelector(".profile__edit-button");
let buttonClose = popup.querySelector(".popup__close");

function open() {
let name = document.querySelector(".profile__name").innerText;
let job = document.querySelector(".profile__description").innerText;

document.querySelector('#profile-name').value = name;
document.querySelector('#profile-description').value = job;

popup.classList.add("popup_opened");
}
function close() {
popup.classList.remove("popup_opened");
}

buttonEdit.addEventListener("click", open);
buttonClose.addEventListener("click", close);

let formElement = document.querySelector(".form");
let nameInput = document.querySelector('#profile-name');
let jobInput = document.querySelector('#profile-description');

function formSubmitHandler(evt) {
evt.preventDefault();

let nameInputValue = nameInput.value;
let jobInputValue = jobInput.value;

let nameDiv = document.querySelector(".profile__name");
let jobDiv = document.querySelector(".profile__description");

nameDiv.textContent = nameInputValue;
jobDiv.textContent = jobInputValue;

popup.classList.remove("popup_opened");
}

formElement.addEventListener('submit', formSubmitHandler);