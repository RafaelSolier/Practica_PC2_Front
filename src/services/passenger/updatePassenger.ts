import Api from "@services/api";
import { PassengerPatchRequest } from "@interfaces/passenger/PassengerPatchRequest";
import { PassengerResponse } from "@interfaces/passenger/PassengerResponse";

export async function updatePassenger(
  //id: number,
  data: PassengerPatchRequest
): Promise<PassengerResponse> {
  const Apis = await Api.getInstance();
  const response = await Apis.patch<PassengerPatchRequest, PassengerResponse>(
    data,
    { url: `/passenger/me` }
  );
  return response.data;
}