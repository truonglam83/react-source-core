import type { SampleItem } from "./sample.type";
import { GET_SAMPLE_LIST } from "../../utils/constants/endpoints";
import { callApi } from "../../utils/functions/callApi";

export const getSampleList = () => {
  return callApi<SampleItem[]>({
    endpoint: GET_SAMPLE_LIST,
  });
};
