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
    console.log('setActiveAvatar', activeAvatar);
  },
  chatMap: {},
  updatingChat: null,
  updateChatMap: (value: ChatItem[]) => {
    set({ chatMap: { ...get().chatMap, [get().activeAvatar.id]: value } });
  },
  addChat: (value: ChatItem) => {
    const { activeAvatar, chatMap } = get();
    console.log('addchat', get().activeAvatar.id, chatMap);
    set({
      chatMap: {
        ...chatMap,
        [activeAvatar.id]: [...(chatMap[activeAvatar.id] || []), value]
      }
    });
  },
  getChat: () => {
    return new Promise((resolve) => {
      const chatDataArray = getBotChatData().split('');
      console.log('chatDataArray', chatDataArray);
      const activeAvatar = get().activeAvatar;
      const getNewChat = (i: number) => {
        if (i < chatDataArray.length) {
          const { updatingChat } = get();
          if (i === 0) {
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
          } else {
            if (!updatingChat) return;
            set({
              updatingChat: {
                ...updatingChat,
                content: updatingChat.content + chatDataArray[i]
              }
            });
          }
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
