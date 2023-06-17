class UserModel {
  password?: string = undefined;
  email?: string = undefined;
  #token?: string;

  constructor(name?: string, email?: string) {
    this.password = name;
    this.email = email;
    this.setToken = this.setToken.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  setToken(token: string) {
    if (token) {
      this.#token = token;
    }
  }

  getToken() {
    if (this.#token) {
      return this.#token;
    }
  }
}

export default UserModel;
