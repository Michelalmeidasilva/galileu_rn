import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextInput, TouchableOpacity, View, ViewProps} from 'react-native';

type ChatFooterProps = {
  onSendMessage: (value: MessageValues) => void;
} & ViewProps;

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const ChatFooter: FC<ChatFooterProps> = ({onSendMessage}) => {
  const [text, setText] = React.useState('');
  const [isSendingMessage, setIsSendingMessage] = React.useState(false);
  const [hasMoreContentToLoad, setHasMoreContentToLoad] = React.useState(true);

  const inputRef = React.useRef(null);

  const thisIsAnExamplesRandomically = () => {
    onSendMessage({
      id: uid(),
      sended: '',
      text: 'By passing extraData={selectedId} to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, FlatList would not know it',
      user: 'chatgpt-3.5',
    });
  };

  const sendMessage = async () => {
    try {
      setIsSendingMessage(true);

      onSendMessage({id: uid(), sended: '', text, user: 'michel'});

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
      {!isSendingMessage ? (
        <TextInput
          ref={inputRef}
          style={{flex: 9, marginLeft: 10, height: 60}}
          placeholder="Send a Message"
          value={text}
          onChangeText={setText}
        />
      ) : (
        <View style={styles.text}>
          <Text>Generating a response ...</Text>
        </View>
      )}

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
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ChatFooter;
