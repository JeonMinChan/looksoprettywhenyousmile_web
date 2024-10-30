import chooseFrameRespositoryImpl from "@src/repositories/ChooseFrame/chooseFrame.respositoryImpl";
import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "../QueryKeys";

export const useFramePost = () => {
  const mutation = useMutation((image: FormDataEntryValue) => chooseFrameRespositoryImpl.frameShare(image));
  return mutation;
};

export const useGetRandomFrame = (shouldFetch: boolean) =>
  useQuery(QUERY_KEYS.frame, () => chooseFrameRespositoryImpl.getRandomFrame(), {
    staleTime: 1000 * 60 * 60, //5분
    cacheTime: 1000 * 60 * 60, //5분
    enabled: shouldFetch,
  });
