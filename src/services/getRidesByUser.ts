import Api from "@services/api";
import { RideByUserResponse } from "@interfaces/ride/RideByUserResponse";
import { PaginatedResponse } from "@interfaces/pagination/PaginatedResponse";

export async function getRidesByUser(
  page: number,
  size: number,
): Promise<PaginatedResponse<RideByUserResponse>> {
  const Apis = await Api.getInstance();
  const response = await Apis.get<null, PaginatedResponse<RideByUserResponse>>({
    url: `/ride/user?page=${page}&size=${size}`,
  });
  return response.data;
}