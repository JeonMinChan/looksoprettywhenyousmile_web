import { create } from 'zustand';

interface Store {
  imgUrl: string;
  setImgUrl: (url: string) => void;
}

export const useImgStore = create<Store>((set) => ({
  imgUrl: '',
  setImgUrl: (url: string) => set({ imgUrl: url }),
}));
