import * as actionTypes from './actionTypes';

export const messengerConnect = () => ({
  type: actionTypes.MESSENGER_CONNECT
});

export const messengerConnected = () => ({
  type: actionTypes.MESSENGER_CONNECTED
});

export const messengerDisconnect = () => ({
  type: actionTypes.MESSENGER_DISCONNECT
});

export const messengerDisconnected = () => ({
  type: actionTypes.MESSENGER_DISCONNECTED
});

export const messengerShowOnline = user => ({
  type: actionTypes.MESSENGER_SHOW_ONLINE,
  user
});

export const messengerShowOffline = user => ({
  type: actionTypes.MESSENGER_SHOW_OFFLINE,
  user
});

export const messengerChangeChannel = channel => ({
  type: actionTypes.MESSENGER_CHANGE_CHANNEL,
  channel
});
export const messengerChangedChannel = (users, channel) => ({
  type: actionTypes.MESSENGER_CHANGED_CHANNEL,
  users,
  channel
});

export const messengerJoinedUser = user => ({
  type: actionTypes.MESSENGER_JOINED_USER,
  user
});

export const messengerLeftUser = user => ({
  type: actionTypes.MESSENGER_LEFT_USER,
  user
});

export const messengerSendMessage = message => ({
  type: actionTypes.MESSENGER_SEND_MESSAGE,
  message
});

export const messengerReceivedMessage = message => ({
  type: actionTypes.MESSENGER_RECEIVED_MESSAGE,
  message
});

export const messengerSendWhisper = (whisper, to) => ({
  type: actionTypes.MESSENGER_SEND_WHISPER,
  whisper,
  to
});

export const messengerReceivedWhisper = whisper => ({
  type: actionTypes.MESSENGER_RECEIVED_WHISPER,
  whisper
});

export const messengerFailedWhisper = feedback => ({
  type: actionTypes.MESSENGER_FAILED_WHISPER,
  feedback
});

export const messengerGetOnline = online => ({
  type: actionTypes.MESSENGER_GET_ONLINE,
  online
});