export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;

      this.getUserInfo = this.getUserInfo.bind(this);
      this.getInitialCards = this.getInitialCards.bind(this);
      this.deleteCard = this.deleteCard.bind(this);
      this.likeHandler = this.likeHandler.bind(this);
      this.sendAvatarInfo = this.sendAvatarInfo.bind(this);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`)
        })
    };
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    sendUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        });
    }

    sendNewPostInfo(data) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        });
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: 'DELETE'
        });
    }

    likeHandler(cardId, isAlreadyLiked) {
        if (isAlreadyLiked) {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                headers: this._headers,
                method: 'DELETE'
            });
        } else {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                headers: this._headers,
                method: 'PUT'
            });
        }
    }

    sendAvatarInfo(url) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                avatar: url
            })
        });
    }
}