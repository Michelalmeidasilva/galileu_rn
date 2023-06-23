import {GoogleSignin} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';
import {useState} from 'react';

interface LoginMethods {
  loginWithEmailAndPassword(): Promise<void>;
  loginWithGoogle(): Promise<void>;
  logout(): Promise<void>;
  user: {email: string; password: string};
  isLoading: boolean;
}

const useLoginController = (): LoginMethods => {
  const [user, _] = useState<{email: string; password: string}>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const loginWithEmailAndPassword = async () => {
    try {
      setIsLoading(true);

      if (user.email && user.password) {
        await auth().signInWithEmailAndPassword(user?.email, user?.password);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await auth()?.signOut();
  };

  const loginWithGoogle = async () => {
    GoogleSignin.configure({
      webClientId:
        '728001156547-docgbsjctp1atp1isrf4omljgcsacir1.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    await auth().signInWithCredential(googleCredential);
  };

  return {
    isLoading,
    user,
    logout,
    loginWithEmailAndPassword,
    loginWithGoogle,
  };
};

export default useLoginController;
