import {useNavigation} from '@react-navigation/native';
import {useUser} from 'providers';
import React, {FC} from 'react';

import {View, Button, Text, StyleSheet} from 'react-native';

type Props = {};

const HomeScreen: FC<Props> = ({}) => {
  const navigation = useNavigation();
  const {logout} = useUser();

  //* To-do Listagem com os batepapos do chat gpt organizado por titulo*/
  return (
    <View style={styles?.body}>
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

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export {HomeScreen};
