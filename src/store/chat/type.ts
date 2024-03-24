import { AvatarInfo } from 'src/store/game/type';

export interface ChatItem {
  id: string;
  content: string;
  avatarUrl: string;
  name: string;
  // 消息发出时间
  time: number;
  // 消息类型
  type: string;
  // 是自己还是游戏角色
  isSelf: boolean;
  // 消息是否结束
  isEnd: boolean;
}

export interface ChatStore {
  // 活跃的角色
  activeAvatar: AvatarInfo;
  // 设置活跃的角色
  setActiveAvatar: (activeAvatar: AvatarInfo) => void;
  // 每个角色的聊天消息
  chatMap: Record<string, ChatItem[]>;
  // 更新角色的聊天消息
  updateChatMap: (value: ChatItem[]) => void;
  // 增加聊天消息
  addChat: (value: ChatItem) => void;
  //当前正在更新的消息
  updatingChat: ChatItem | null;
  // 获取角色对话
  getChat: () => Promise<ChatItem>;
}
