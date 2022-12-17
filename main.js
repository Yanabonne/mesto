(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function r(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n);if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===e(n)?n:String(n)}t.p="";var i=function(){function t(e,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_showInputError",(function(t,e){var n=o._form.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o._settings.inputErrorClass)),n.textContent=e})),r(this,"_hideInputError",(function(t){var e=o._form.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(o._settings.inputErrorClass)),e.textContent=""})),r(this,"_checkInputValidity",(function(t){t.validity.valid?o._hideInputError(t):o._showInputError(t,t.validationMessage)})),r(this,"_setEventListeners",(function(){o._inputList=Array.from(o._form.querySelectorAll("".concat(o._settings.inputSelector))),o._buttonElement=o._form.querySelector("".concat(o._settings.submitButtonSelector)),o._toggleButtonState(),o._inputList.forEach((function(t){t.addEventListener("input",(function(){o._checkInputValidity(t),o._toggleButtonState()}))}))})),r(this,"enableValidation",(function(){o._setEventListeners()})),r(this,"disableButton",(function(){o._buttonElement.classList.add(o._settings.inactiveButtonClass),o._buttonElement.setAttribute("disabled",!0)})),this._settings=e,this._form=n}var e,o;return e=t,(o=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();const u=t.p+"1ad06e85f169668a1f36.svg",a=t.p+"35948469632d0421d697.svg";function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===c(o)?o:String(o)),r)}var o}var l=function(){function t(e,n,r,o,i,u,a,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=e,this._cardData=n,this._name=this._cardData.name,this._link=this._cardData.link,this._templateSelector=r,this._handleCardClick=o,this._likes=i,this._handleTrashClick=u,this._dislikeCard=a,this._likeCard=c,this.updateLikes=this.updateLikes.bind(this),this.removeCard=this.removeCard.bind(this)}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-grid__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photo=this._element.querySelector(".photo-grid__picture"),this._likesCount=this._element.querySelector(".photo-grid__likes-count"),this._photo.setAttribute("src",this._link),this._photo.setAttribute("alt",this._name),this._element.querySelector(".photo-grid__title").textContent=this._name,this._likesCount.textContent=this._likes,this._setEventListeners(),this._checkDeleteButton(),this._checkIfLiked(),this._element}},{key:"updateLikes",value:function(t){this._like.classList.contains("photo-grid__like_active")?(this._like.classList.toggle("photo-grid__like_active"),this._like.src=u):(this._like.classList.toggle("photo-grid__like_active"),this._like.src=a),this._likesCount.textContent=t.likes.length}},{key:"removeCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".photo-grid__trash-button").addEventListener("click",(function(){t._handleTrashClick()})),this._like=this._element.querySelector(".photo-grid__like"),this._like.addEventListener("click",(function(){t._like.classList.contains("photo-grid__like_active")?t._dislikeCard():t._likeCard()})),this._photo.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_checkDeleteButton",value:function(){this._cardData.owner._id!==this._userId&&(this._element.querySelector(".photo-grid__trash-button").style.display="none")}},{key:"_checkIfLiked",value:function(){var t=this;this._cardData.likes.some((function(e){return e._id===t._userId}))&&(this._like.src=a,this._like.classList.toggle("photo-grid__like_active"))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===h(o)?o:String(o)),r)}var o}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this.open=this.open.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this),this.setEventListeners=this.setEventListeners.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__cross"))&&t.close()}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=g(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function k(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return w(t)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._button=e._popup.querySelector(".form__submit"),e.setCallback=e.setCallback.bind(w(e)),e}return e=u,(n=[{key:"setCallback",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;this._button.addEventListener("click",(function(){t._handleSubmit()})),_(E(u.prototype),"setEventListeners",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===O(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=L(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function L(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function R(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return R(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._photo=e._popup.querySelector(".popup__photo"),e._caption=e._popup.querySelector(".popup__figcaption"),e}return e=u,(n=[{key:"open",value:function(t,e){this._photo.setAttribute("src",e),this._photo.setAttribute("alt",t),this._caption.textContent=t,C(T(u.prototype),"open",this).call(this)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===D(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=x(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function x(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function N(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return N(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmit=e,n._form=n._popup.querySelector(".form"),n._button=n._popup.querySelector(".form__submit"),n}return e=u,(n=[{key:"close",value:function(){this._form.reset(),A(V(u.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){return Array.from(this._form.querySelectorAll(".form__text")).map((function(t){return t.value}))}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())})),A(V(u.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(t,e){this._button.textContent=t?"Сохранение...":e}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===H(o)?o:String(o)),r)}var o}var z=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=e,this._descriptionSelector=n,this._image=document.querySelector(r),this._name=document.querySelector(this._nameSelector),this._description=document.querySelector(this._descriptionSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserAvatar",value:function(t){this._image.src=t}},{key:"setUserInfo",value:function(t){this._name.textContent=t.popupName,this._description.textContent=t.popupDescription}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===$(o)?o:String(o)),r)}var o}var G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers,this.getUserInfo=this.getUserInfo.bind(this),this.getInitialCards=this.getInitialCards.bind(this),this.deleteCard=this.deleteCard.bind(this),this.setCardLikeStatus=this.setCardLikeStatus.bind(this),this.sendAvatarInfo=this.sendAvatarInfo.bind(this),this._getResponseData=this._getResponseData.bind(this)}var e,n;return e=t,(n=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"sendUserInfo",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._getResponseData(t)}))}},{key:"sendNewPostInfo",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(t)}).then((function(t){return e._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{headers:this._headers,method:"DELETE"}).then((function(t){return e._getResponseData(t)}))}},{key:"setCardLikeStatus",value:function(t,e){var n=this;return e?fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(t){return n._getResponseData(t)})):fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{headers:this._headers,method:"PUT"}).then((function(t){return n._getResponseData(t)}))}},{key:"sendAvatarInfo",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t})}).then((function(t){return e._getResponseData(t)}))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),K={inputSelector:".form__text",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__text_type_error"},Q=document.querySelector(".profile__edit"),W=document.querySelector("#popup-profile"),X=W.querySelector("#popup-name"),Y=W.querySelector("#popup-description"),Z=W.querySelector(".form"),tt=document.querySelector(".profile__add-button"),et=document.querySelector("#popup-mesto").querySelector(".form"),nt=document.querySelector("#popup-profile-image"),rt=document.querySelector(".profile__edit-avatar");function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}new i(K,Z).enableValidation();var it=new i(K,et);it.enableValidation(),new i(K,nt).enableValidation();var ut=new G({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"cd0a4e61-8d40-4238-b4eb-aa04c869218e","Content-Type":"application/json"}}),at=new z(".profile__name",".profile__description",".profile__picture"),ct=new J("#popup-profile",(function(t){ct.renderLoading(!0,"Сохранить"),ut.sendUserInfo({name:t[0],about:t[1]}).then((function(){at.setUserInfo({popupName:X.value,popupDescription:Y.value}),ct.close()})).catch((function(t){console.log(t)})).finally((function(){ct.renderLoading(!1,"Сохранить")}))}));Q.addEventListener("click",(function(){var t=at.getUserInfo();X.value=t.name,Y.value=t.description,ct.open()})),ct.setEventListeners();var st=new q("#popup_picture");st.setEventListeners();var lt=new j("#popup-delete");lt.setEventListeners();var ft,pt=new J("#popup-profile-image",(function(t){pt.renderLoading(!0,"Сохранить"),ut.sendAvatarInfo(t[0]).then((function(t){at.setUserAvatar(t.avatar),pt.close()})).catch((function(t){console.log(t)})).finally((function(){pt.renderLoading(!1,"Сохранить")}))}));pt.setEventListeners(),rt.addEventListener("click",pt.open),ut.getUserInfo().then((function(t){ft=t._id})).catch((function(t){console.log(t)}));var yt=new y({renderer:function(t){var e=new l(ft,t,"#photo-grid__item",st.open,t.likes.length,(function(){lt.open(),lt.setCallback((function(){ut.deleteCard(t._id).then((function(){e.removeCard(),lt.close()})).catch((function(t){console.log(t)}))}))}),(function(){ut.setCardLikeStatus(t._id,!0).then((function(t){e.updateLikes(t)})).catch((function(t){console.log(t)}))}),(function(){ut.setCardLikeStatus(t._id,!1).then((function(t){e.updateLikes(t)})).catch((function(t){console.log(t)}))})),n=e.generateCard();yt.addItem(n)}},".photo-grid"),ht=new J("#popup-mesto",(function(t){ht.renderLoading(!0,"Создать"),ut.sendNewPostInfo({name:t[0],link:t[1]}).then((function(t){yt.renderItems([t]),ht.close()})).catch((function(t){console.log(t)})).finally((function(){ht.renderLoading(!1,"Создать")})),it.disableButton()}));ht.setEventListeners(),tt.addEventListener("click",(function(){ht.open()})),Promise.all([ut.getUserInfo(),ut.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ot(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];at.setUserInfo({popupName:o.name,popupDescription:o.about}),at.setUserAvatar(o.avatar),yt.renderItems(i.reverse())})).catch((function(t){return console.log(t)}))})();