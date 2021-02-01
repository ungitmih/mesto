let popup = document.querySelector(".popup");
let buttonEdit = document.querySelector(".profile__edit-button");
let buttonClose = popup.querySelector(".popup__close");
let name = document.querySelector(".profile__name").textContent;
let job = document.querySelector(".profile__description").textContent;
let nameDiv = document.querySelector(".profile__name");
let jobDiv = document.querySelector(".profile__description");

//открытие попапа
function open() {
document.querySelector('#profile-name').value = name;
document.querySelector('#profile-description').value = job;

popup.classList.add("popup_opened");
}
//закрытие попапа
function close() {
popup.classList.remove("popup_opened");
}

let formElement = document.querySelector(".form");
let nameInput = document.querySelector('#profile-name');
let jobInput = document.querySelector('#profile-description');
//отправка формы
function formSubmitHandler(evt) {
evt.preventDefault();

let nameInputValue = nameInput.value;
let jobInputValue = jobInput.value;

nameDiv.textContent = nameInputValue;
jobDiv.textContent = jobInputValue;

return close();
}

formElement.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener("click", open);
buttonClose.addEventListener("click", close);