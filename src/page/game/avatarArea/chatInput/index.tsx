import { useChatStore } from 'src/store/chat';
import React, { useState } from 'react';
import { Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { v4 } from 'uuid';

import './index.less';

export const ChatInput = () => {
  const [value, setValue] = useState('');
  const { addChat, getChat } = useChatStore();
  const handleSend = () => {
    addChat({
      content: value,
      isSelf: true,
      isEnd: true,
      id: v4(),
      time: Date.now(),
      type: 'text',
      avatarUrl: '',
      name: ''
    });
    setValue('');
    getChat();
  };
  return (
    <div className='chat-input-wrapper'>
      <Input
        placeholder='有什么想告诉我的吗？'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onPressEnter={handleSend}
        suffix={
          <SendOutlined onClick={handleSend} style={{ color: '#dba96e' }} />
        }
      ></Input>
    </div>
  );
};
