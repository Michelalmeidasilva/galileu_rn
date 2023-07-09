declare type MessageValues = {
  text: string;
  id: string;
  userId: string;
  sended: string;
};

type MessageResponseApi<T> =
  | {status: 'success'; data: T}
  | {status: 'error'; message: string};

declare type MessageInteractions = {
  isSendingMessage: boolean;
  hasMoreContentToLoad: boolean;
  loadMessage: () => void;
  sendMessage: () => void;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};
