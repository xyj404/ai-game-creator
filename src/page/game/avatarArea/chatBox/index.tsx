import { useChatStore } from 'src/store/chat';
import React, { useState } from 'react';
import { ChatInfo } from 'src/page/game/avatarArea/chatInfo';
import { ChatInput } from 'src/page/game/avatarArea/chatInput';
import { ArrowLeftOutlined } from '@ant-design/icons';

import './index.less';

export const ChatBox = ({ onBack }: { onBack: () => void }) => {
  const { chatMap, activeAvatar } = useChatStore();
  const chatList = chatMap[activeAvatar.id];
  return (
    <div className='chat-box-wrapper'>
      <div className='chat-box-header'>
        <div className='box-back'>
          <ArrowLeftOutlined onClick={onBack}></ArrowLeftOutlined>
        </div>
        <div className='box-title'>与 {activeAvatar.name} 聊天中</div>
        <div></div>
      </div>
      <div className='box-list-wrapper'>
        {chatList?.map((item) => {
          return <ChatInfo key={item.id} chatItem={item}></ChatInfo>;
        })}
      </div>
      <div className='chat-box-footer'>
        <ChatInput></ChatInput>
      </div>
    </div>
  );
};
