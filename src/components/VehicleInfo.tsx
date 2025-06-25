import { useEffect, useState } from "react";
import { FaTaxi } from "react-icons/fa6";
import { DriverResponse } from "@interfaces/driver/DriverResponse";
import { getDriver } from "@services/driver/getDriver";

export default function VehicleInfo() {
	const [profileInfo, setProfileInfo] = useState<DriverResponse | null>(null);

	async function fetchVehicleInfo() {
		try {
			const driverData = await getDriver();
			setProfileInfo(driverData);
		} catch (error) {
			console.error("Error fetching vehicle info:", error);
		}
	}

	useEffect(() => {
		fetchVehicleInfo();
	}, []);

	return (
		<article>
			<h1 className="title text-2xl font-bold mb-3">Vehículo</h1>
			<section className="flex items-center">
				<div className="w-2/5">
					<FaTaxi className="w-full text-9xl text-gray-400" />
				</div>
				{profileInfo?.vehicle ? (
					<ul className="w-3/5 ml-6 space-y-2">
						<li id="vehicleModel">
							<b>{profileInfo.vehicle.brand} {profileInfo.vehicle.model}</b>
						</li>
						<li id="driverCategory">
							<b>Categoría: </b>
							{profileInfo.category}
						</li>
						<li id="licenseNumber">
							<b>Placa: </b>
							{profileInfo.vehicle.licensePlate}
						</li>
						<li id="yearOfFabrication">
							<b>Año de fabricación: </b>
							{profileInfo.vehicle.fabricationYear}
						</li>
						<li id="capacityNumber">
							<b>Capacidad: </b>
							{profileInfo.vehicle.capacity}
						</li>
					</ul>
				) : (
					<p className="w-3/5 ml-6">Cargando información del vehículo...</p>
				)}
			</section>
		</article>
	);
}