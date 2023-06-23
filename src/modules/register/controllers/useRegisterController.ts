import auth from '@react-native-firebase/auth';

const useRegisterController = () => {
  const signUp = async (user: any) => {
    console.log('user', user);

    if (user?.email && user?.password) {
      console.log('test');
      const userCredentials = await auth().createUserWithEmailAndPassword(
        user?.email,
        user?.password,
      );

      console.log('test', userCredentials);
    }
  };

  return {
    signUp,
  };
};

export default useRegisterController;
