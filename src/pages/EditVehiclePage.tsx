import VehicleInfo from "@components/VehicleInfo";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDriver } from "@services/driver/getDriver";
import { updateDriverCar } from "@services/driver/updateDriverCar";
import { VehicleResponse } from "@interfaces/vehicle/VehicleResponse";

export default function EditVehiclePage() {
	const navigate = useNavigate();
	const [driverId, setDriverId] = useState<number | null>(null);
	const [vehicleData, setVehicleData] = useState<VehicleResponse>({
		brand: "",
		model: "",
		licensePlate: "",
		fabricationYear: new Date().getFullYear(),
		capacity: 4
	});

	useEffect(() => {
		getDriverId();
	}, []);

	async function getDriverId() {
		try {
			const driver = await getDriver();
			setDriverId(driver.id);
			if (driver.vehicle) {
				setVehicleData(driver.vehicle);
			}
		} catch (error) {
			console.error("Error fetching driver data:", error);
		}
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setVehicleData(prev => ({
			...prev,
			[name]: name === "fabricationYear" || name === "capacity" ? parseInt(value) : value
		}));
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		
		if (!driverId) {
			console.error("Driver ID not found");
			return;
		}

		try {
			await updateDriverCar(driverId, vehicleData);
			navigate("/dashboard");
		} catch (error) {
			console.error("Error updating vehicle:", error);
		}
	}

	return (
		<main className="p-10 max-w-4xl mx-auto">
			<article className="bg-white p-8 rounded-lg shadow-lg mb-6">
				<h1 className="text-3xl font-bold mb-6">Editar Vehículo</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="brand" className="block text-sm font-medium mb-2">Marca</label>
						<input 
							type="text" 
							name="brand" 
							id="brand" 
							value={vehicleData.brand} 
							onChange={handleChange}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							required
						/>
					</div>
					<div>
						<label htmlFor="model" className="block text-sm font-medium mb-2">Modelo</label>
						<input 
							type="text" 
							name="model" 
							id="model" 
							value={vehicleData.model} 
							onChange={handleChange}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							required
						/>
					</div>
					<div>
						<label htmlFor="licensePlate" className="block text-sm font-medium mb-2">Placa</label>
						<input
							type="text"
							name="licensePlate"
							id="licensePlate"
							value={vehicleData.licensePlate}
							onChange={handleChange}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							required
						/>
					</div>
					<div>
						<label htmlFor="fabricationYear" className="block text-sm font-medium mb-2">Año de Fabricación</label>
						<input
							type="number"
							name="fabricationYear"
							id="fabricationYear"
							value={vehicleData.fabricationYear}
							onChange={handleChange}
							min="1990"
							max={new Date().getFullYear()}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							required
						/>
					</div>
					<div>
						<label htmlFor="capacity" className="block text-sm font-medium mb-2">Capacidad</label>
						<input
							type="number"
							name="capacity"
							id="capacity"
							value={vehicleData.capacity}
							onChange={handleChange}
							min="1"
							max="8"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							required
						/>
					</div>
					<button
						id="vehicleSubmit"
						className="w-full bg-primary text-white font-bold py-3 px-4 rounded-full hover:bg-primary-dark transition-colors"
						type="submit"
					>
						Actualizar Vehículo
					</button>
				</form>
			</article>
			
			<div className="bg-white p-8 rounded-lg shadow-lg">
				<VehicleInfo />
			</div>
		</main>
	);
}