import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = MessageInteractions;

const ChatButton: FC<Props> = ({
  isSendingMessage,
  hasMoreContentToLoad,
  loadMessage,
  sendMessage,
  text,
}) => {
  return (
    <TouchableOpacity
      style={styles?.button}
      disabled={isSendingMessage}
      onPress={async () => {
        if (hasMoreContentToLoad) {
          await loadMessage();
        }
        if (text !== '' && !isSendingMessage) {
          await sendMessage();
        }
      }}>
      {isSendingMessage ? <Text>Wait a moment</Text> : <Text>send</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatButton;
