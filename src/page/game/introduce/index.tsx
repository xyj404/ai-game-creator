import React from 'react';
import { useGameStore } from 'src/store/game';

import './index.less';

export const Introduce = () => {
  const { gameInfo } = useGameStore();
  const { introduce } = gameInfo;
  return <div className={'intro-wrapper'}>{introduce}</div>;
};
