import React from 'react';
import { Header } from 'src/share/component/header';

import './index.less';

export const Game = () => {
  return (
    <div className='game-wrapper'>
      <Header></Header>
      <div className='game-content'>
        <div className='game-title'>我的朋友成了汉灵帝</div>
      </div>
    </div>
  );
};
