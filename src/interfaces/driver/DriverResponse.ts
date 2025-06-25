import type { VehicleResponse } from '../vehicle/VehicleResponse';
export interface DriverResponse {
    id : number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    category: string;
    avgRating: number;
    trips: number;
    vehicle: VehicleResponse
}
