import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import useLoginController from '../controllers/useLoginController';
import {useUser} from '../../../providers';

const LoginScreen = ({}) => {
  const {loginWithCredentials, loginWithGoogle} = useUser();

  const controller = useLoginController({
    loginWithCredentials,
    loginWithGoogle,
  });
  const navigation = useNavigation();

  return (
    <View>
      <TextInput
        style={{
          marginHorizontal: 10,
        }}
        placeholder="Email"
        onChangeText={item => (controller.user.email = item)}
      />
      <TextInput
        style={{
          marginHorizontal: 10,
          marginTop: 8,
        }}
        placeholder="Password"
        onChangeText={item => (controller.user.password = item)}
      />

      <Button
        title="login"
        disabled={controller?.isLoading}
        onPress={async () => {
          await controller.login('credentials');
        }}
      />

      <Button
        title="sign-up"
        onPress={async () => {
          navigation.navigate('Register');
        }}
      />

      <Button
        title="google"
        onPress={async () => await controller.login('google')}
      />
    </View>
  );
};

export default LoginScreen;
