import UserModel from 'domain/models/User';

class RegisterViewModel {
  user: UserModel;

  constructor(user: UserModel) {
    this.user = new UserModel(user.password, user.email);
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    //access API
  }
}

export default RegisterViewModel;
