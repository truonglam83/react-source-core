// sample payload & response types
export interface GetSampleListPayload {
  page: number;
  pageSize: number;
}

export interface GetSampleListResponse {
  items: { id: number; name: string }[];
  total: number;
}
