import { create } from 'zustand';
import { ChatItem, ChatStore } from './type';
import { getBotChatData } from 'src/services/mock/botChatData';
import { v4 } from 'uuid';

export const useChatStore = create<ChatStore>((set, get) => ({
  activeAvatar: {
    id: '',
    name: '机器人',
    image: ''
  },
  setActiveAvatar: (activeAvatar) => {
    set({ activeAvatar });
  },
  chatMap: {},
  updatingChat: null,
  updateChatMap: (value: ChatItem[]) => {
    set({ chatMap: { ...get().chatMap, [get().activeAvatar.id]: value } });
  },
  addChat: (value: ChatItem) => {
    set({
      chatMap: {
        ...get().chatMap,
        [get().activeAvatar.id]: [
          ...get().chatMap[get().activeAvatar.id],
          value
        ]
      }
    });
  },
  getChat: () => {
    return new Promise((resolve) => {
      const chatDataArray = getBotChatData().split('');
      const activeAvatar = get().activeAvatar;
      const getNewChat = (i: number) => {
        if (i < chatDataArray.length) {
          set({
            updatingChat: {
              id: v4(),
              content: chatDataArray[i],
              avatarUrl: activeAvatar.image,
              name: activeAvatar.name,
              time: Date.now(),
              type: 'bot',
              isSelf: false,
              isEnd: false
            }
          });
          setTimeout(() => {
            getNewChat(i + 1);
          }, 100);
        } else {
          get().addChat(get().updatingChat as ChatItem);
          set({ updatingChat: null });
        }
      };
      getNewChat(0);
    });
  }
}));
