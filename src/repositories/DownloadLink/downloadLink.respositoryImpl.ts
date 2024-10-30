import dearAxios from "@src/libs/axios/customAxios";
import { DownloadLinkRepository } from "./downloadLink.repository";
import { getLinkResponse } from "@src/types/DownloadLink/downloadLink.types";

class DownloadLinkRepositoryImpl implements DownloadLinkRepository {
  public async downloadLink(
    image: FormDataEntryValue,
  ): Promise<getLinkResponse> {
    const { data } = await dearAxios.post(
      "/image",
      { image: image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return data;
  }
}

export default new DownloadLinkRepositoryImpl();
