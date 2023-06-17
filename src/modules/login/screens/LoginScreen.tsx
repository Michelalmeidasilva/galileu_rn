import React, {FC} from 'react';
import {View, TextInput, Button} from 'react-native';
import LoginModel from '../viewmodel/LoginViewModel';

type UserScreenProps = {
  viewModel?: LoginModel;
};

const LoginScreen: FC<UserScreenProps> = ({viewModel = new LoginModel()}) => {
  console.log('lgin');
  return (
    <View>
      <TextInput
        style={{
          marginHorizontal: 10,
        }}
        placeholder="Email"
        onChangeText={item => {
          viewModel.user.email = item;
          return item;
        }}
      />
      <TextInput
        style={{
          marginHorizontal: 10,
          marginTop: 8,
        }}
        placeholder="Password"
        onChangeText={item => {
          viewModel.user.password = item;
          return item;
        }}
      />

      <Button
        title="login"
        onPress={async () => {
          await viewModel.loginWithEmailAndPassword();
        }}
      />
    </View>
  );
};

export default LoginScreen;
