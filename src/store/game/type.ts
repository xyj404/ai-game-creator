interface creatorInfo {
  name: string;
  avatarUrl: string;
  description: string;
}

interface GameInfo {
  name: string;
  tags: string[];
  introduce: string;
  coverUrl: string;
}

interface PlayInfo {
  playingNum: number;
}

export interface AvatarInfo {
  id: string;
  image: string;
  name: string;
}

export interface GameStore {
  gameInfo: GameInfo;
  creatorInfo: creatorInfo;
  playInfo: PlayInfo;
  avatarList: AvatarInfo[];
}
