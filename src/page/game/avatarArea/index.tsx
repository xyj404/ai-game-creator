import React, { useState } from 'react';
import { useGameStore } from 'src/store/game';
import { useChatStore } from 'src/store/chat';
import { ChatBox } from './chatBox';

import './index.less';

export const AvatarArea = () => {
  const [visible, setVisible] = useState(false);
  const { avatarList } = useGameStore();
  const { setActiveAvatar } = useChatStore();
  return (
    <div className={'avatar-area-wrapper'}>
      {visible && <ChatBox onBack={() => setVisible(false)}></ChatBox>}
      {!visible && (
        <div className='avatar-area-list-wrapper'>
          <div className='avatar-area-title'>角色互动</div>
          <div className='avatar-area-list'>
            {avatarList.map((item) => (
              <div className={'avatar-item'} key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>{item.name}</div>
                <div
                  className='avatar-item-chat'
                  onClick={() => {
                    setVisible(true);
                    setActiveAvatar(item);
                  }}
                >
                  与TA聊天
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
