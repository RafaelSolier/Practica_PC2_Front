import Profile from "@components/Profile";
import RidesHistorial from "@components/RidesHistorial";
import VehicleInfo from "@components/VehicleInfo";
import { getRoleBasedOnToken } from "src/utils/getRoleBasedOnToken";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DashboardPage() {
	const navigate = useNavigate();
	const [userId, setUserId] = useState<number | null>(null);

	return (
		<main className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
			<div className="home-section bg-white p-6 rounded-lg shadow-lg">
				<Profile setUserId={setUserId} />
				<button 
					id="editProfile" 
					onClick={() => navigate("/profile/edit")}
					className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
				>
					Editar Perfil
				</button>
			</div>

			{getRoleBasedOnToken() === "ROLE_DRIVER" ? (
				<div className="home-section bg-white p-6 rounded-lg shadow-lg">
					<VehicleInfo />
					<button 
						id="editVehicle" 
						onClick={() => navigate("/vehicle/edit")}
						className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
					>
						Editar Vehículo
					</button>
				</div>
			) : (
				<RidesHistorial />
			)}
		</main>
	);
}