import { create } from "zustand";

interface FormStore {
  formData: FormData;
  addPhoto: (blob: Blob, pictureCount: number) => void;
}

export const pictureStore = create<FormStore>((set) => ({
  formData: new FormData(),
  addPhoto: (blob, pictureCount) => {
    set((state) => {
      const newFormData = new FormData(); // 새로운 FormData 객체 생성

      // 기존 FormData의 모든 항목을 복사
      state.formData.forEach((value, key) => {
        newFormData.append(key, value);
      });

      // 새로운 사진 추가
      newFormData.append(`photo_${pictureCount + 1}`, blob, `photo_${pictureCount + 1}.png`);
      return { formData: newFormData };
    });
  },
}));