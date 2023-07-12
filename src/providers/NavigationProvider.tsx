import * as React from 'react';

import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {HomeScreen} from 'modules/home/screens/';
import {RegisterScreen} from 'modules/register/screens';
import {LoginScreen} from 'modules/login/screens';
import {ChatScreen} from 'modules/chat/screens';
import {Header} from 'components/Header';

import {useUser} from './';
import {ProfileScreen} from 'modules/profile';

const AuthenticatedStack = () => {
  const screenOptions: NativeStackNavigationOptions = {
    header: props => <Header />,
  };

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{title: 'Chat'}}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: true}}
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
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Sign-up'}}
      />
    </Stack.Navigator>
  );
};

const NavigationProvider = () => {
  const {user, initializing} = useUser();

  if (initializing) {
    return <ActivityIndicator size={'small'} />;
  }

  return (
    <NavigationContainer>
      {user ? <AuthenticatedStack /> : <UnAuthenticatedStack />}
    </NavigationContainer>
  );
};

export {NavigationProvider};
