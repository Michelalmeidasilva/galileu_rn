import React from 'react';

import Chat from 'components/Chat/Chat';
import {useUser} from 'providers';

const MessagesStored: MessageValues[] | undefined = [
  {
    text: 'Hello! How can I assist you today?',
    id: '1232dsads',
    sended: 'day',
    userId: 'chatgpt-3.5',
  },
];

const ChatScreen = () => {
  const {user} = useUser();

  return (
    <Chat
      userId={user?.providerData?.[0]?.email}
      initialValue={MessagesStored}
    />
  );
};

export {ChatScreen};
