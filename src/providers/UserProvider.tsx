import React, {FC, createContext, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type UserContextProps = {
  user: UserGoogleSignin | null;
  initializing: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserGoogleSignin | null>>;
  logout: () => Promise<void>;
  loginWithCredentials: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
};

const UserContext = createContext({} as UserContextProps);

const useUser = () => useContext(UserContext);

type Props = {
  children: React.ReactNode;
};

const UserProvider: FC<Props> = ({children}) => {
  const [user, setUser] = React.useState<UserGoogleSignin | null>(null);

  const [initializing, setInitializing] = React.useState(true);

  const loginWithCredentials = async (email: string, password: string) => {
    if (email && password) {
      const response = (await auth().signInWithEmailAndPassword(
        email,
        password,
      )) as unknown;

      setUser(response as UserGoogleSignin);
    }
  };

  const loginWithGoogle = async () => {
    GoogleSignin.configure({
      webClientId:
        '728001156547-docgbsjctp1atp1isrf4omljgcsacir1.apps.googleusercontent.com',
    });

    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const response = (await auth().signInWithCredential(
      googleCredential,
    )) as unknown;

    setUser(response as UserGoogleSignin);
  };

  const logout = async () => {
    await auth()?.signOut();

    setUser(null);
  };

  function onAuthStateChanged(value: any) {
    try {
      if (value) {
        setUser(value);
      }
      if (initializing) {
        setInitializing(false);
      }
    } catch (err) {}
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
        initializing,
        loginWithCredentials,
        loginWithGoogle,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, useUser};
