import Api from "@services/api";
import { PassengerResponse } from "@interfaces/passenger/PassengerResponse";

export async function getPassenger(): Promise<PassengerResponse> {
  const Apis = await Api.getInstance();
  const response = await Apis.get<null, PassengerResponse>({
    url: "/passenger/me",
  });
  return response.data;
}