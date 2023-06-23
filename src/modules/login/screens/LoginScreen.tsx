import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useLoginController from '../controllers/useLoginController';

const LoginScreen = ({}) => {
  const controller = useLoginController();
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
          await controller.loginWithEmailAndPassword();
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
        onPress={async () => await controller.loginWithGoogle()}
      />
    </View>
  );
};

export default LoginScreen;
