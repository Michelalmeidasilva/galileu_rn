import React, {FC} from 'react';
import {View, TextInput, Button} from 'react-native';
import LoginModel from '../viewmodel/LoginViewModel';

type UserScreenProps = {
  viewModel?: LoginModel;
};

const UserScreen: FC<UserScreenProps> = ({
  viewModel = new LoginModel({email: '', password: ''}),
}) => {
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
        onPress={() => {
          console.log(viewModel?.user);
        }}
      />
    </View>
  );
};

export default UserScreen;
