import React, {FC} from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';
import ChatInput from './ChatInput';
import {delay, uid} from '../../domain/utils';
import ChatButton from './ChatButton';

type ChatFooterProps = {
  onSendMessage: (value: MessageValues) => void;
  userId: string;
} & ViewProps;

const ChatFooter: FC<ChatFooterProps> = ({onSendMessage, userId}) => {
  const [text, setText] = React.useState('');
  const [isSendingMessage, setIsSendingMessage] = React.useState(false);
  const [hasMoreContentToLoad, setHasMoreContentToLoad] = React.useState(true);

  const thisIsAnExamplesRandomically = () => {
    onSendMessage({
      id: uid(),
      sended: '',
      text: 'By passing extraData={selectedId} to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, FlatList would not know it',
      userId: 'chatgpt-3.5',
    });
  };

  const sendMessage = async () => {
    try {
      setIsSendingMessage(true);

      onSendMessage({id: uid(), sended: '', text, userId});

      await delay(2000);

      thisIsAnExamplesRandomically();
      setText('');
    } catch (err) {
    } finally {
      setIsSendingMessage(false);
    }
  };

  const loadMessage = async () => {
    try {
      setIsSendingMessage(true);

      setHasMoreContentToLoad(false);
    } catch (err) {
    } finally {
      setIsSendingMessage(false);
    }
  };

  return (
    <View style={styles.container}>
      <ChatInput
        isSendingMessage={isSendingMessage}
        setText={setText}
        text={text}
      />

      <ChatButton
        hasMoreContentToLoad={hasMoreContentToLoad}
        isSendingMessage={isSendingMessage}
        loadMessage={loadMessage}
        sendMessage={sendMessage}
        setText={setText}
        text={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ChatFooter;
