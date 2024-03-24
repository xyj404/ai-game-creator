import React from 'react';
import { useGameStore } from 'src/store/game';

import './index.less';

export const AvatarArea = () => {
  const { avatarList } = useGameStore();
  return (
    <div className={'avatar-area-wrapper'}>
      <div className='avatar-area-title'>角色互动</div>
      <div className='avatar-area-list'>
        {avatarList.map((item) => (
          <div className={'avatar-item'} key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div>与TA聊天</div>
          </div>
        ))}
      </div>
    </div>
  );
};
