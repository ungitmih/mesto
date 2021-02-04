let popup = document.querySelector(".popup");
let buttonEdit = document.querySelector(".profile__edit-button");
let buttonClose = popup.querySelector(".popup__close");

let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__description");

let nameInput = document.querySelector('#profile-name');
let jobInput = document.querySelector('#profile-description');

let formElement = document.querySelector(".form");

//открытие попапа
function open() {
nameInput.value = name.textContent;
jobInput.value = job.textContent;

popup.classList.add("popup_opened");
}
//закрытие попапа
function close() {
popup.classList.remove("popup_opened");
}

//отправка формы
function formSubmitHandler(evt) {
evt.preventDefault();

name.textContent = nameInput.value;
job.textContent = jobInput.value;

close();
}

formElement.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener("click", open);
buttonClose.addEventListener("click", close);