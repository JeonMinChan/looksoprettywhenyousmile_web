import { getLinkResponse } from "@src/types/DownloadLink/downloadLink.types";

export interface DownloadLinkRepository {
  downloadLink(img: FormDataEntryValue): Promise<getLinkResponse>;
}
