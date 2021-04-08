(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._name=e.name,this._src=e.link,this._alt=e.name,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._imgEl.addEventListener("click",(function(){e._handleCardClick(e._name,e._src)})),this._handleLike.addEventListener("click",(function(){e._likePhoto()})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._deletePhoto()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._name,this._imgEl=this._element.querySelector(".element__picture"),this._imgEl.src=this._src,this._imgEl.alt=this._alt,this._handleLike=this._element.querySelector(".element__like"),this._setEventListeners(),this._element}},{key:"_deletePhoto",value:function(){this._element.remove()}},{key:"_likePhoto",value:function(){this._handleLike.classList.toggle("element__like_active")}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector))}var t,r;return t=e,(r=[{key:"_showError",value:function(){this._inputElement.classList.add(this._inputErrorClass),this._errorElement.classList.add(this._errorClass),this._errorElement.textContent=this._inputElement.validationMessage}},{key:"_hideError",value:function(e){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_inputValidate",value:function(e){this._inputElement=e,this._errorElement=this._form.querySelector(".".concat(this._inputElement.id,"-error")),this._inputElement.validity.valid?this._hideError(e):this._showError()}},{key:"_inputIsValid",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"disabledButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_buttonToggle",value:function(){this._inputIsValid()?this.disabledButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._buttonToggle(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._inputValidate(t),e._buttonToggle()}))}))}},{key:"enableValidation",value:function(){var e=this;this._setEventListeners(),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._buttonToggle()}))}},{key:"resetForm",value:function(){var e=this;this._inputs.forEach((function(t){e._hideError(t)})),this._buttonToggle()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addImage",value:function(e){this._container.prepend(e)}},{key:"reset",value:function(){this._container.innerHTML=""}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._handleOverlayClose(t)}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===this._popup&&this.close()}}])&&u(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._image=r._popup.querySelector(t),r._caption=r._popup.querySelector(n),r}return t=u,(n=[{key:"open",value:function(e,t){a(h(u.prototype),"open",this).call(this),this._image.alt=e,this._image.src=t,this._caption.textContent=e}}])&&c(t.prototype,n),u}(s);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._popupForm=this._popup.querySelectorAll(".form__input"),this._inputValues={},this._popupForm.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"close",value:function(){this._popup.querySelector(".form").reset(),y(E(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;y(E(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}}])&&m(t.prototype,n),u}(s);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.profileName,r=t.profileDescription;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,description:this._profileDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.description;this._profileName.textContent=t,this._profileDescription.textContent=n}}])&&g(t.prototype,n),e}(),C=document.querySelector(".popup-profile"),w=document.querySelector(".popup-photo"),O=document.querySelector(".popup-image"),q=(document.querySelector(".popup__picture"),document.querySelector(".popup__picturecaption"),document.querySelector(".profile__edit-button")),L=document.querySelector(".profile__add-button"),j=(C.querySelector(".popup__close"),w.querySelector(".popup__close"),O.querySelector(".popup__close"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector("#profile-name")),P=document.querySelector("#profile-description"),x=(document.querySelector("#photo-name"),document.querySelector("#photo-link"),C.querySelector(".form")),R=w.querySelector(".form"),T=(document.querySelector(".elements__items"),{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__profile-save",inactiveButtonClass:"form__button-disabled",inputErrorClass:"form__field-invalid",errorClass:"form__error"}),I=new k(".popup-profile",(function(e){return D.setUserInfo(e)}));I.setEventListeners();var B=new r(T,x),V=new r(T,R),D=new S({profileName:".profile__name",profileDescription:".profile__description"});q.addEventListener("click",(function(){I.open();var e=D.getUserInfo();j.value=e.name,P.value=e.description,B.resetForm()}));var F=new k(".popup-photo",(function(e){var t=U(e);A.addImage(t)}));F.setEventListeners();var N=new _(".popup-image",".popup__picture",".popup__picturecaption");N.setEventListeners();var A=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=U(e);A.addItem(t)}},".elements__items");function U(e){return new t(e,".elements-template",{handleCardClick:function(e,t){N.open(e,t)}}).generateCard()}A.renderItems(),L.addEventListener("click",(function(){F.open(),V.resetForm()})),V.enableValidation(),B.enableValidation()})();