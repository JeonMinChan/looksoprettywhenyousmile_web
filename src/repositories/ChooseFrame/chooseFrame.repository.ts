import { getRandomResponse } from "@src/types/ChooseFrame/chooseFrame.types";

export interface ChooseFrameRepository {
  frameShare(image: FormDataEntryValue): Promise<void>;
  getRandomFrame(): Promise<getRandomResponse>;
}
