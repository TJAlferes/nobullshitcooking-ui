import React from 'react';

import { Message, IUser } from '../../../../store/messenger/types';
import LeftNav from '../../../LeftNav/LeftNav';
import { ChatView } from './desktop/ChatView';
import { OptionsView } from './desktop/OptionsView';
import { PeopleView } from './desktop/PeopleView';
import './messenger.css';

export function MessengerView({
  twoColumnATheme,
  authname,
  feedback,
  loading,
  status,
  handleConnect,
  handleDisconnect,
  channel,
  roomToEnter,
  handleRoomInputChange,
  handleChannelChange,
  messagesRef,
  messages,
  messageToSend,
  handleMessageInputChange,
  handleMessageSend,
  users,
  onlineFriends,
  peopleTab,
  handlePeopleTabChange,
  focusedFriend,
  handleFriendClick,
  focusedUser,
  handleUserClick,
  startWhisper
}: Props): JSX.Element {
  return (
    <div className={`messenger two-column-a ${twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>Messenger</h1>

        <p className="messenger-feedback">{feedback}</p>

        <OptionsView
          loading={loading}
          status={status}
          channel={channel}
          roomToEnter={roomToEnter}
          handleRoomInputChange={handleRoomInputChange}
          handleChannelChange={handleChannelChange}
          handleConnect={handleConnect}
          handleDisconnect={handleDisconnect}
        />

        <div className="messenger-main">

          <ChatView
            authname={authname}
            status={status}
            messagesRef={messagesRef}
            messages={messages}
            messageToSend={messageToSend}
            handleMessageInputChange={handleMessageInputChange}
            handleMessageSend={handleMessageSend}
          />

          <PeopleView
            users={users}
            onlineFriends={onlineFriends}
            peopleTab={peopleTab}
            handlePeopleTabChange={handlePeopleTabChange}
            focusedFriend={focusedFriend}
            handleFriendClick={handleFriendClick}
            focusedUser={focusedUser}
            handleUserClick={handleUserClick}
            startWhisper={startWhisper}
          />

        </div>

      </section>

    </div>
  );
}

type Props = {
  twoColumnATheme: string;
  authname: string;
  feedback: string;
  loading: boolean;
  status: string;
  handleConnect(): void;
  handleDisconnect(): void;
  channel: string;
  roomToEnter: string;
  handleRoomInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleChannelChange(): void;
  messagesRef: React.RefObject<HTMLUListElement>;
  messages: Message[];
  messageToSend: string;
  handleMessageInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleMessageSend(e: React.KeyboardEvent): void;
  users: IUser[];
  onlineFriends: IUser[];
  peopleTab: string;
  handlePeopleTabChange(value: string): void;
  focusedFriend: IUser|null;
  handleFriendClick(friend: IUser): void;
  focusedUser: IUser|null;
  handleUserClick(user: IUser): void;
  startWhisper(username: string): void;
};