import downloadLinkRespositoryImpl from "@src/repositories/DownloadLink/downloadLink.respositoryImpl";
import { useMutation } from "react-query";

export const useLinkPost = () => {
  const mutation = useMutation((image: FormDataEntryValue) =>
    downloadLinkRespositoryImpl.downloadLink(image),
  );
  return mutation;
};
