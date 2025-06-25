import Api from "@services/api";
import { DriverPatchRequest } from "@interfaces/driver/DriverPatchRequest";
import { DriverResponse } from "@interfaces/driver/DriverResponse";

export async function updateDriverInfo(
  id: number,
  data: DriverPatchRequest
): Promise<DriverResponse> {
  const Apis = await Api.getInstance();
	const response = await Apis.patch<DriverPatchRequest, DriverResponse>(
    data,
    { url: `/driver/${id}` }
  );
  return response.data;
}