import UserModel from '../../../domain/models/User';

import auth from '@react-native-firebase/auth';

interface LoginMethods {
  loginWithEmailAndPassword(): void;
  loginWithGoogle(): void;
}

class LoginViewModel implements LoginMethods {
  user: UserModel;

  constructor(user?: UserModel) {
    this.user = new UserModel(user?.password, user?.email);

    this.loginWithEmailAndPassword = this.loginWithEmailAndPassword.bind(this);
  }

  async loginWithEmailAndPassword() {
    if (this.user?.email && this?.user?.password) {
      const userCredentials = await auth().signInWithEmailAndPassword(
        this?.user?.email,
        this?.user?.password,
      );

      console.log(userCredentials);
    }
  }

  async logout() {
    await auth()?.signOut();
  }

  async loginWithGoogle() {}
}

export default LoginViewModel;
