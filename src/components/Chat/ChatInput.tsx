import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  isSendingMessage: boolean;
};

const ChatInput: FC<Props> = ({text, setText, isSendingMessage}) => {
  return (
    <>
      {!isSendingMessage ? (
        <TextInput
          style={styles.input}
          placeholder="Send a Message"
          value={text}
          onChangeText={setText}
        />
      ) : (
        <View style={styles.text}>
          <Text>Generating a response ...</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 9,
    marginLeft: 10,
    height: 60,
  },
  text: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatInput;
