import auth from '@react-native-firebase/auth';

const useRegisterController = () => {
  const signUp = async (user: any) => {
    if (user?.email && user?.password) {
      const userCredentials = await auth().createUserWithEmailAndPassword(
        user?.email,
        user?.password,
      );
    }
  };

  return {
    signUp,
  };
};

export default useRegisterController;
