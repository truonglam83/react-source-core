// Call refresh token API

import { callApi } from "@/utils/api/api.util";

export const refreshTokenApi = async (refreshToken: string) => {
  return callApi<
    { refreshToken: string },
    { accessToken: string; refreshToken?: string }
  >({
    url: "/auth/refresh",
    method: "post",
    data: { refreshToken },
  });
};
