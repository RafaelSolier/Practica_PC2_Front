import Api from "@services/api";
import { DriverResponse } from "@interfaces/driver/DriverResponse";

export async function getDriver(): Promise<DriverResponse> {
  const Apis = await Api.getInstance();
  const response = await Apis.get<null, DriverResponse>({
    url: "/driver/me",
  });
  return response.data;
}