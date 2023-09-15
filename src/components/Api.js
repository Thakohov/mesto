class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Что-то пошло не так...");
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  createCard(cardData) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Что-то пошло не так...");
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  setUserInfo({ name, job }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about: job }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json({ name, about: job });
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  setLikes(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  deleteLikes(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  setAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: data.avatar }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json({ avatar: data.avatar });
        }
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }
}

const optionsApi = {
  url: "https://mesto.nomoreparties.co/v1/cohort-75",
  headers: {
    authorization: "a2e53856-d081-4f31-b654-cd6028925996",
    "Content-Type": "application/json",
  },
};

const api = new Api(optionsApi);

export default api;
