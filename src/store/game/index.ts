import { create } from 'zustand';
import { GameStore } from './type';

export const useGameStore = create<GameStore>((set, get) => ({
  gameInfo: {
    name: '我的朋友成了汉灵帝',
    tags: ['标签1', '标签2'],
    introduce:
      '游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍游戏介绍',
    coverUrl: ''
  },
  creatorInfo: {
    name: '创作者名称',
    avatarUrl:
      'https://cdn.jsdelivr.net/gh/xyj404/image-bed/img/202403241601369.png',
    description: '创作者介绍'
  },
  playInfo: {
    playingNum: 0
  },
  avatarList: [
    {
      id: '1',
      name: 'bot001',
      image:
        'https://cdn.jsdelivr.net/gh/xyj404/image-bed/img/202403241601301.png'
    },
    {
      id: '2',
      name: 'bot002',
      image:
        'https://cdn.jsdelivr.net/gh/xyj404/image-bed/img/202403241601301.png'
    },
    {
      id: '3',
      name: 'bot003',
      image:
        'https://cdn.jsdelivr.net/gh/xyj404/image-bed/img/202403241601301.png'
    },
    {
      id: '4',
      name: 'bot004',
      image:
        'https://cdn.jsdelivr.net/gh/xyj404/image-bed/img/202403241601301.png'
    },
    {
      id: '5',
      name: 'bot005',
      image:
        'https://cdn.jsdelivr.net/gh/xyj404/image-bed/img/202403241601301.png'
    },
    {
      id: '6',
      name: 'bot006',
      image:
        'https://cdn.jsdelivr.net/gh/xyj404/image-bed/img/202403241601301.png'
    }
  ]
}));
