import { useGameStore } from 'src/store/game';
import React from 'react';

import './index.less';

export const CreatorInfo = () => {
  const { creatorInfo } = useGameStore();
  const { name, avatarUrl, description } = creatorInfo;

  return (
    <div className={'creator-wrapper'}>
      <div className='creator-header'>创作者信息</div>
      <div className='creator-content'>
        <div className='name'>{name}</div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
};
