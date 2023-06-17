import UserModel from '../../../domain/models/User';

interface UserActions {
  login(): void;
}

class LoginViewModel implements UserActions {
  user: UserModel;

  constructor(user: UserModel) {
    this.user = new UserModel(user.password, user.email);
  }

  login() {}
}

export default LoginViewModel;
