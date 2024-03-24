import { useChatStore } from 'src/store/chat';
import { ChatItem } from 'src/store/chat/type';
import React, { useState } from 'react';
import dayjs from 'dayjs';

import './index.less';

export const ChatInfo = (props: { chatItem: ChatItem }) => {
  const { content, isSelf, isEnd, time, avatarUrl } = props.chatItem;
  return (
    <div className='chat-info-wrapper'>
      <div className={isSelf ? 'chat-info self' : 'chat-info'}>
        {!isSelf && (
          <div className='chat-info-avatar'>
            <img src={avatarUrl} alt='头像'></img>
          </div>
        )}
        <div className={'info-message-wrapper'}>
          <div className='message-text'>{content}</div>
          <div className='message-time'>{dayjs(time).format('HH:mm')}</div>
        </div>
      </div>
    </div>
  );
};
