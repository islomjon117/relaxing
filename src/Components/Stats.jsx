import { Calender, Chart, Clock, Map } from "../assets/icons/icons";
import { useCart } from "../context/CartContext";


function Stats() {
  const { content } = useCart();

  return (
    <div className="relative container mx-auto bg-[url('assets/Img/WorldMap.png')] bg-[#00585308] bg-cover bg-center h-auto">
      <div className="max-w-7xl  mx-auto w-full text-center py-28 px-4 z-10">
        <div className="flex justify-center">
          <h2 className="max-md:text-xl text-4xl max-md:w-full font-bold 	w-[50%] mb-4">
            {content.best_service}
          </h2>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-600  max-md:w-full w-[50%] mb-24">
            {content.best_service_body}
          </p>
        </div>
        <div className="grid grid-cols-2 mx-auto container lg:flex lg:flex-row justify-between gap-2 md:gap-12 justify-center h-auto mb-10">
          <div className="bg-white rounded-lg p-10 text-center shadow-lg flex-1">
            <div className="flex justify-center mb-10">
              <Calender />
            </div>
            <h3 className="text-2xl font-bold">2 +</h3>
            <p className="text-gray-600 text-xl mb-4">{content.experienced_professionals}</p>
          </div>
          <div className="bg-white rounded-lg p-10 text-center shadow-lg flex-1">
            <div className="flex justify-center mb-10">
              <Chart />
            </div>
            <h3 className="text-2xl font-bold">200 +</h3>
            <p className="text-gray-600 text-xl">{content.happy_travels}</p>
          </div>
          <div className="bg-white rounded-lg p-10 text-center shadow-lg flex-1">
            <div className="flex justify-center mb-10">
              <Map />
            </div>

            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-gray-600 text-xl">{content.place_visit}</p>
          </div>
          <div className="bg-white rounded-lg p-10 text-center shadow-lg flex-1">
            <div className="flex justify-center mb-10">
              <Clock />
            </div>
            <h3 className="text-2xl font-bold">2k+</h3>
            <p className="text-gray-600 text-xl">{content.travel_history}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
