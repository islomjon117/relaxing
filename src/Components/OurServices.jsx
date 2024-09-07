import { Ticket, Hotel, PaperPlane } from "./../assets/icons/icons.jsx";

import { useCart } from "../context/CartContext";


function OurServices() {

  const {  content } = useCart();

  return (
    <div className="py-24 bg-white container mx-auto">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-16">{content.our_service}</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 bg-[#F9F9F9] hover:bg-[white] hover:shadow-xl hover:border-2 rounded-lg p-6 text-center transition duration-500 ease-in">
            <div className="flex justify-center mb-4">
              <Ticket />
            </div>
            <h3 className="text-xl font-semibold mb-2">{content.ticet_booking}</h3>
            <p className="text-gray-600">
              {content.ticet_bron}
            </p>
          </div>
          <div className="flex-1 bg-[#F9F9F9] hover:bg-[white] hover:shadow-xl hover:border-2 rounded-lg p-6 text-center transition duration-500 ease-in">
            <div className="flex justify-center">
              <Hotel />
            </div>
            <h3 className="text-xl font-semibold mb-2">{content.hotel_booking}</h3>
            <p className="text-gray-600">
              {content.hotel_bron}
            </p>
          </div>
          <div className="flex-1 bg-[#F9F9F9] hover:bg-[white] hover:shadow-xl hover:border-2 rounded-lg p-6 text-center transition duration-500 ease-in">
            <div className="flex justify-center mb-1">
              <PaperPlane />
            </div>
            <h3 className="text-xl font-semibold mb-2">{content.tour_plan}</h3>
            <p className="text-gray-600">
              {content.tour_body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
