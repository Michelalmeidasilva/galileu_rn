import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type MessageProps = {
  value: string;
  userName: string;
  messageName: string;
};

const Message: FC<MessageProps> = ({value, userName, messageName}) => {
  const isUser = userName === messageName;

  return (
    <>
      <View
        style={{
          backgroundColor: isUser ? '#878787' : '#656565',
          flex: 9,
        }}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default Message;
