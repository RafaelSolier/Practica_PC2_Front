import Api from "@services/api";
import { VehicleResponse } from "@interfaces/vehicle/VehicleResponse";

export async function updateDriverCar(
  id: number,
  vehicle: VehicleResponse
): Promise<string> {
    const Apis = await Api.getInstance();
    const response = await Apis.patch<VehicleResponse, string>(
    vehicle,
    { url: `/driver/${id}/car` }
  );
  return response.data;
}
