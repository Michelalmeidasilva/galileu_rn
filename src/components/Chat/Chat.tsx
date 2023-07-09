import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Message from './Message';
import ChatFooter from './ChatFooter';

type ChatProps = {
  initialValue: MessageValues[];
};

const MessagesStored: MessageValues[] | undefined = [
  {
    text: 'Hello! How can I assist you today?',
    id: 'dsadsdasd12324',
    sended: 'day',
    user: 'chatgpt-3.5',
  },
];

const Chat: FC<ChatProps> = ({initialValue = MessagesStored}) => {
  const [messages, setMessages] = React.useState(initialValue);
  const flatListRef = React.useRef<FlatList>(null);

  const renderItem = (item: MessageValues) => {
    return (
      <Message
        messageName={'michel'}
        userName={item.user}
        key={item.id}
        value={item.text}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderItem(item)}
      />

      <ChatFooter
        onSendMessage={(value: MessageValues) => {
          setMessages(current => [...current, value]);
          flatListRef?.current?.scrollToEnd();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-end',
  },
  scrollview: {
    flex: 9,
  },
});

export default Chat;
