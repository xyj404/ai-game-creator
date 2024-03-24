import { useChatStore } from 'src/store/chat';
import React, { useState } from 'react';
import { Input } from 'antd';

import './index.less';

export const ChatInput = () => {
  const { addChat } = useChatStore();
  return (
    <div className='chat-info-wrapper'>
      <Input></Input>
    </div>
  );
};
