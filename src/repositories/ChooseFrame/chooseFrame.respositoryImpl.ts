import dearAxios from "@src/libs/axios/customAxios";
import { ChooseFrameRepository } from "./chooseFrame.repository";
import { getRandomResponse } from "@src/types/ChooseFrame/chooseFrame.types";

class ChooseFrameRepositoryImpl implements ChooseFrameRepository {
  public async frameShare(image: FormDataEntryValue): Promise<void> {
    await dearAxios.post(
      "/frame",
      { image: image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  }
  public async getRandomFrame(): Promise<getRandomResponse> {
    const { data } = await dearAxios.get("/frame");
    return data;
  }
}

export default new ChooseFrameRepositoryImpl();
