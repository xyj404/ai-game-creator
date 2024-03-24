import { useChatStore } from 'src/store/chat';
import { ChatItem } from 'src/store/chat/type';
import React, { useState } from 'react';

import './index.less';

export const ChatInfo = (props: { chatItem: ChatItem }) => {
  const { content, isSelf, isEnd } = props.chatItem;
  return (
    <div className='chat-info-wrapper'>
      <div className='chat-info'>{content}</div>
    </div>
  );
};
