import {useNavigation} from '@react-navigation/native';
import {useUser} from 'providers';
import React, {FC} from 'react';

import {View, Button, Text} from 'react-native';

type Props = {};

const HomeScreen: FC<Props> = ({}) => {
  const navigation = useNavigation();
  const {logout} = useUser();
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>

      <Button
        title="Chat"
        onPress={() => {
          navigation.navigate('Chat');
        }}
      />

      <Text>Logout</Text>

      <Button
        title="Logout"
        onPress={async () => {
          await logout();
        }}
      />
    </View>
  );
};

export {HomeScreen};
