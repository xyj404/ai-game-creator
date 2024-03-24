import React from 'react';
import { Header } from 'src/share/component/header';
import { useGameStore } from 'src/store/game';
import { AvatarArea } from 'src/page/game/avatarArea';
import { Introduce } from './introduce';
import { CreatorInfo } from './creatorInfo';

import './index.less';

export const Game = () => {
  const { gameInfo } = useGameStore();
  const { name, tags } = gameInfo;
  return (
    <div className='game-wrapper'>
      <Header></Header>
      <div className='game-container'>
        <div className='game-content'>
          <div className='game-title'>{name}</div>
          <div className='game-tags'>
            {tags.map((item) => (
              <div className='game-tag' key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className='game-inner'>
            <div className='game-player'></div>
            <div className='avatar-area-container'>
              <AvatarArea></AvatarArea>
            </div>
          </div>
          <div className='game-footer'>
            <Introduce></Introduce>
            <CreatorInfo></CreatorInfo>
          </div>
        </div>
      </div>
    </div>
  );
};
