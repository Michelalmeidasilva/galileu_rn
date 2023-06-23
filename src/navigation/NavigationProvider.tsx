import * as React from 'react';

import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth';

import HomeScreen from '../modules/home/screens/HomeScreen';
import RegisterScreen from '../modules/register/screens/RegisterScreen';
import LoginScreen from '../modules/login/screens/LoginScreen';

const AuthenticatedStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
    </Stack.Navigator>
  );
};

const UnAuthenticatedStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login'}}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Sign-up'}}
      />
    </Stack.Navigator>
  );
};

export default function NavigationProvider() {
  const [user, setUser] = React.useState();
  const [initializing, setInitializing] = React.useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <ActivityIndicator size={'small'} />;
  }

  return (
    <NavigationContainer>
      {user ? <AuthenticatedStack /> : <UnAuthenticatedStack />}
    </NavigationContainer>
  );
}
