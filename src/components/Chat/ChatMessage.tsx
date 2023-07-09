import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  value: string;
  userId: string;
  receiverId: string;
};

const ChatMessage: FC<Props> = ({value, userId, receiverId}) => {
  const isUser = userId === receiverId;

  return (
    <>
      <View
        style={[
          styles.container,
          isUser ? styles.sourceBackground : styles.destinyBackground,
        ]}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sourceBackground: {
    backgroundColor: '#878787',
  },
  destinyBackground: {
    backgroundColor: '#656565',
  },
  container: {
    flex: 9,
  },
  text: {
    flex: 9,
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  icon: {
    flex: 1,
    marginHorizontal: 16,
  },
});

export default ChatMessage;
