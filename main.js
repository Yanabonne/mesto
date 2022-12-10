(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function r(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n);if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===t(n)?n:String(n)}e.p="";var i=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showInputError",(function(e,t){var n=o._form.querySelector(".".concat(e.id,"-error"));e.classList.add("".concat(o._settings.inputErrorClass)),n.textContent=t})),r(this,"_hideInputError",(function(e){var t=o._form.querySelector(".".concat(e.id,"-error"));e.classList.remove("".concat(o._settings.inputErrorClass)),t.textContent=""})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),r(this,"_setEventListeners",(function(){o._inputList=Array.from(o._form.querySelectorAll("".concat(o._settings.inputSelector))),o._buttonElement=o._form.querySelector("".concat(o._settings.submitButtonSelector)),o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState()}))}))})),r(this,"enableValidation",(function(){o._setEventListeners()})),r(this,"disableButton",(function(){o._buttonElement.classList.add(o._settings.inactiveButtonClass),o._buttonElement.setAttribute("disabled",!0)})),this._settings=t,this._form=n}var t,o;return t=e,(o=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();const c=e.p+"1ad06e85f169668a1f36.svg",u=e.p+"35948469632d0421d697.svg";function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===s(o)?o:String(o)),r)}var o}var l=function(){function e(t,n,r,o,i,c,u,s,a,l,f){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._templateSelector=r,this._handleCardClick=o,this._likes=i,this._openDeletePopup=c,this._deleteCard=document.querySelector(u).querySelector(".form__submit"),this._closeDeletePopup=s,this._cardId=a,this._deleteCardFromServer=l,this._likeCard=f,this._likeHandler=this._likeHandler.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-grid__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photo=this._element.querySelector(".photo-grid__picture"),this._likesCount=this._element.querySelector(".photo-grid__likes-count"),this._photo.setAttribute("src",this._link),this._photo.setAttribute("alt",this._name),this._element.querySelector(".photo-grid__title").textContent=this._name,this._likesCount.textContent=this._likes,this._setEventListeners(),this._element}},{key:"_likeHandler",value:function(e){var t=this,n=e.target;n.classList.contains("photo-grid__like_active")?(n.src=c,this._likeCard(this._cardId,!0).then((function(e){return e.json()})).then((function(e){t._likesCount.textContent=e.likes.length})).catch((function(e){console.log(e)}))):(n.src=u,this._likeCard(this._cardId,!1).then((function(e){return e.json()})).then((function(e){t._likesCount.textContent=e.likes.length})).catch((function(e){console.log(e)}))),n.classList.toggle("photo-grid__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".photo-grid__trash-button").addEventListener("click",(function(){e._openDeletePopup(),e._deleteCard.addEventListener("click",(function(){e._element.remove(),e._deleteCardFromServer(e._cardId).catch((function(e){console.log(e)})),e._closeDeletePopup()}))})),this._element.querySelector(".photo-grid__like").addEventListener("click",this._likeHandler),this._photo.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"deleteButtonHandler",value:function(e,t){var n=this;e().then((function(e){t.owner.name!==e.name&&(n._element.querySelector(".photo-grid__trash-button").style.display="none")})).catch((function(e){console.log(e)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===h(o)?o:String(o)),r)}var o}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this.open=this.open.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this),this.setEventListeners=this.setEventListeners.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__cross"))&&e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===b(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._photo=t._popup.querySelector(".popup__photo"),t._caption=t._popup.querySelector(".popup__figcaption"),t}return t=c,(n=[{key:"open",value:function(e,t){this._photo.setAttribute("src",t),this._photo.setAttribute("alt",e),this._caption.textContent=e,_(k(c.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(m);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===j(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function I(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._submitForm=t,n._form=n._popup.querySelector(".form"),n}return t=c,(n=[{key:"close",value:function(){this._form.reset(),C(q(c.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("submit",this._submitForm),C(q(c.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(e,t){this._button=this._popup.querySelector(".form__submit"),this._button.textContent=e?"Сохранение...":t}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(m);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===U(o)?o:String(o)),r)}var o}var R=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=t,this._descriptionSelector=n,this._image=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._name=document.querySelector(this._nameSelector),this._description=document.querySelector(this._descriptionSelector),{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e){this._name=document.querySelector(this._nameSelector),this._description=document.querySelector(this._descriptionSelector),this._name.textContent=e.popupName,this._description.textContent=e.popupDescription,this._image.src=e.image}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===B(o)?o:String(o)),r)}var o}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers,this.getUserInfo=this.getUserInfo.bind(this),this.getInitialCards=this.getInitialCards.bind(this),this.deleteCard=this.deleteCard.bind(this),this.likeHandler=this.likeHandler.bind(this),this.sendAvatarInfo=this.sendAvatarInfo.bind(this)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})})}},{key:"sendNewPostInfo",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"})}},{key:"likeHandler",value:function(e,t){return t?fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}):fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"})}},{key:"sendAvatarInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})})}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),H={inputSelector:".form__text",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__text_type_error"},N=document.querySelector(".profile__edit"),V=document.querySelector("#popup-profile"),F=V.querySelector("#popup-name"),J=V.querySelector("#popup-description"),z=V.querySelector(".form"),M=document.querySelector(".profile__add-button"),G=document.querySelector("#popup-mesto"),K=G.querySelector("#popup-mesto-name"),Q=G.querySelector("#popup-link"),W=G.querySelector(".form"),X=document.querySelector("#popup-profile-image"),Y=document.querySelector(".profile__edit-avatar"),Z=X.querySelector("#popup-profile-link"),$=document.querySelector(".profile__picture");new i(H,z).enableValidation();var ee=new i(H,W);ee.enableValidation(),new i(H,X).enableValidation();var te=new A({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"cd0a4e61-8d40-4238-b4eb-aa04c869218e","Content-Type":"application/json"}}),ne=new R(".profile__name",".profile__description",".profile__picture"),re=new T("#popup-profile",(function(e){e.preventDefault(),re.renderLoading(!0,"Сохранить"),ne.setUserInfo({popupName:F.value,popupDescription:J.value}),te.sendUserInfo({name:F.value,about:J.value}).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!1,"Сохранить")})),re.close()}));te.getUserInfo().then((function(e){ne.setUserInfo({popupName:e.name,popupDescription:e.about,image:e.avatar})})).catch((function(e){console.log(e)})),N.addEventListener("click",(function(){var e=ne.getUserInfo();F.value=e.name,J.value=e.description,re.open()})),re.setEventListeners();var oe=new E("#popup_picture");oe.setEventListeners();var ie=new m("#popup-delete");ie.setEventListeners();var ce=new T("#popup-profile-image",(function(e){e.preventDefault(),ce.renderLoading(!0,"Сохранить"),te.sendAvatarInfo(Z.value).then((function(e){return e.json()})).then((function(e){$.src="".concat(e.avatar)})).catch((function(e){console.log(e)})).finally((function(){ce.renderLoading(!1,"Сохранить")})),ce.close()}));ce.setEventListeners(),Y.addEventListener("click",ce.open);var ue=new y({renderer:function(e){var t=new l(e.name,e.link,"#photo-grid__item",oe.open,e.likes.length,ie.open,"#popup-delete",ie.close,e._id,te.deleteCard,te.likeHandler),n=t.generateCard();t.deleteButtonHandler(te.getUserInfo,e),ue.addItem(n)}},".photo-grid"),se=new T("#popup-mesto",(function(e){e.preventDefault(),se.renderLoading(!0,"Создать"),te.sendNewPostInfo({name:K.value,link:Q.value}).then((function(e){return e.json()})).then((function(e){ue.renderItems([e])})).catch((function(e){console.log(e)})).finally((function(){se.renderLoading(!1,"Создать")})),se.close(),ee.disableButton()}));se.setEventListeners(),M.addEventListener("click",(function(){se.open()})),te.getInitialCards().then((function(e){ue.renderItems(e.reverse())})).catch((function(e){console.log(e)}))})();