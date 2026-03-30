import { callApi } from "@/utils/api/api.util";
import { GET_LIST_SAMPLE } from "@/constants/api.endpoint";
import { GetSampleListPayload, GetSampleListResponse } from "./sample.type";

/**
 * Sample API call
 */
export const getSampleList = (payload: GetSampleListPayload) => {
  return callApi<GetSampleListPayload, GetSampleListResponse>({
    url: GET_LIST_SAMPLE,
    method: "post",
    data: payload,
  });
};
