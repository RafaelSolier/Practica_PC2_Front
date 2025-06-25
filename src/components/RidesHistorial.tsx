import { useEffect, useState } from "react";
import RideItem from "./RideItem";
import { RideByUserResponse } from "@interfaces/ride/RideByUserResponse";
import { getRidesByUser } from "@services/getRidesByUser";
//import { PaginatedResponse } from "@interfaces/pagination/PaginatedResponse";

export default function RidesHistorial() {
	const [rides, setRides] = useState<RideByUserResponse[]>([]);
	const [loading, setLoading] = useState(true);

	async function fetchRides() {
		try {
			// Obtener viajes de la primera página con 10 elementos
			const response = await getRidesByUser(0, 10);
			// La respuesta es un objeto paginado, extraer el contenido
			setRides(response.content);
		} catch (error) {
			console.error("Error fetching rides:", error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchRides();
	}, []);

	return (
		<article className="home-section bg-white p-6 rounded-lg shadow-lg">
			<h1 className="title text-2xl font-bold mb-4">Historial de viajes</h1>
			<section id="ridesHistorial" className="space-y-4 max-h-96 overflow-y-auto">
				{loading ? (
					<p>Cargando viajes...</p>
				) : rides.length > 0 ? (
					rides.map((ride, index) => (
						<RideItem
							key={index}
							id={index.toString()}
							data={{
								originName: ride.originName,
								departureDate: ride.departureDate,
								destinationName: ride.destinationName,
								price: ride.price,
							}}
						/>
					))
				) : (
					<p>No hay viajes registrados</p>
				)}
			</section>
		</article>
	);
}