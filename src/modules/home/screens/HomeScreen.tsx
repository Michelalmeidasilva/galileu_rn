import LoginViewModel from '../../login/viewmodel/LoginViewModel';
import React, {FC} from 'react';
import {View, Button, Text} from 'react-native';

const HomeScreen: FC<{viewModel: LoginViewModel}> = ({
  viewModel = new LoginViewModel(),
}) => {
  console.log('home');

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Logout"
        onPress={async () => {
          viewModel.logout();
        }}
      />
    </View>
  );
};

export default HomeScreen;
