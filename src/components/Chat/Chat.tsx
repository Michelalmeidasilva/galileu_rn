import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Message from './ChatMessage';
import ChatFooter from './ChatFooter';

type Props = {
  initialValue: MessageValues[];
  userId: string;
};

const Chat: FC<Props> = ({initialValue = [], userId}) => {
  const [messages, setMessages] = React.useState(initialValue);
  const flatListRef = React.useRef<FlatList>(null);

  console.log(JSON.stringify(messages, null, 4));
  const renderItem = (item: MessageValues) => {
    return (
      <Message
        receiverId={item?.userId}
        userId={userId}
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
        userId={userId}
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
