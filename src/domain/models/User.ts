class UserModel {
  password: string;
  email: string;

  constructor(name: string, email: string) {
    this.password = name;
    this.email = email;
  }
}

export default UserModel;
