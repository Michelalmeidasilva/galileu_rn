import {useState} from 'react';

type UserLoginController = {
  loginWithCredentials: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
};

const useLoginController = ({
  loginWithCredentials,
  loginWithGoogle,
}: UserLoginController): LoginActions => {
  const [user, _] = useState<{email: string; password: string}>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (type: 'google' | 'credentials') => {
    try {
      setIsLoading(true);

      if (type === 'credentials') {
        await loginWithCredentials(user?.email, user?.password);
      } else {
        loginWithGoogle();
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    user,
    login,
  };
};

export default useLoginController;
