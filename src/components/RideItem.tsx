import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { TbClockHour4Filled } from "react-icons/tb";

interface RideItemProps {
	id: string;
	data: {
		originName: string;
		departureDate: string;
		destinationName: string;
		price: number;
	};
}

export default function RideItem(props: RideItemProps) {
	// Formatear la fecha para mostrarla de manera legible
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleString('es-PE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	};

	return (
		<section id={props.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
			<div className="flex items-center mb-2">
				<FaLocationDot className="text-green-500 mr-2" />
				<b className="mr-2">Origen:</b>
				<p id="origin" className="text-gray-700">
					{props.data.originName}
				</p>
			</div>

			<div className="flex items-center mb-2">
				<TbClockHour4Filled className="text-blue-500 mr-2" />
				<b className="mr-2">Fecha Salida:</b>
				<p id="departure" className="text-gray-700">
					{formatDate(props.data.departureDate)}
				</p>
			</div>

			<div className="flex items-center mb-2">
				<FaMapLocationDot className="text-red-500 mr-2" />
				<b className="mr-2">Destino:</b>
				<p id="destination" className="text-gray-700">
					{props.data.destinationName}
				</p>
			</div>

			<div className="flex items-center">
				<AiFillDollarCircle className="text-yellow-500 mr-2" />
				<b className="mr-2">Precio:</b>
				<p id="price" className="text-gray-700">
					{props.data.price.toFixed(1)}
				</p>
			</div>
		</section>
	);
}