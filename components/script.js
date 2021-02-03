let popup = document.querySelector(".popup");
let buttonEdit = document.querySelector(".profile__edit-button");
let buttonClose = popup.querySelector(".popup__close");
let name = document.querySelector(".profile__name").textContent;
document.querySelector('#profile-name').value = name;
let job = document.querySelector(".profile__description").textContent;
document.querySelector('#profile-description').value = job;
let nameDiv = document.querySelector(".profile__name");
let jobDiv = document.querySelector(".profile__description");
let nameInput = document.querySelector('#profile-name');
let jobInput = document.querySelector('#profile-description');
let formElement = document.querySelector(".form");

//открытие попапа
function open() {
nameInputValue = name;
jobInputValue = job;
popup.classList.add("popup_opened");
}
//закрытие попапа
function close() {
popup.classList.remove("popup_opened");
}

//отправка формы
function formSubmitHandler(evt) {
evt.preventDefault();

let nameInputValue = nameInput.value;
let jobInputValue = jobInput.value;

nameDiv.textContent = nameInputValue;
jobDiv.textContent = jobInputValue;

close();
}

formElement.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener("click", open);
buttonClose.addEventListener("click", close);