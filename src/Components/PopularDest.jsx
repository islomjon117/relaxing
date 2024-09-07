// import HalfMap from "../assets/Img/WorldMapHalf.png";
import { useCart } from "../context/CartContext";


import { Arrow } from "../assets/icons/icons";
  
function PopularDest() {

  const {  content } = useCart();

  const destinations = [
    {
      country: "Buxoro",
      spots: "30 +",
      duration: "seats",
      image: "https://www.yaptik.biz/wp-content/uploads/2020/02/buhara-scaled.jpg",
    },
    {
      country: "Margilon",
      spots: "30 +",
      duration: "seats",
      image: "https://avatars.mds.yandex.net/i?id=e94f0833a1142debdba47ef1b6293c28c997d40256e37cc0-12422470-images-thumbs&n=13",
    },
    {
      country: "Samarqand",
      spots: "30 +",
      duration: "seats",
      image: "https://tourist.uz/wp-content/uploads/2024/03/1648097757_54-kartinkin-net-p-samarkand-kartinki-59.jpg",
    },
  ];

  return (
    <div className="bg-white text-center container mx-auto">
      <h2 className="text-4xl font-bold my-20 ">{content.popular_location}</h2>
      <div className="container mx-auto flex flex-col items-center md:flex-col justify-center lg:flex-row">
        <div className="flex-1 -mt-14">
          <img
            src="https://media.istockphoto.com/id/586710362/photo/white-globe-with-north-america-south-america.jpg?s=612x612&w=0&k=20&c=axgN6VEddeFYd2iWskFguhMjO7mzkUPnT90mLJYa9Zg="
            alt="img"
            className="w-auto h-auto"
          />
        </div>

        <div className="w-auto lg:w-[680px] mt-5 md:pr-40 ">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-8 bg-white shadow-lg rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-52 h-52 rounded-lg object-cover"
                />
                <div className="ml-4 flex flex-col md:flex-row items-center gap-12 text-left ">
                  <h3 className="text-lg font-bold">{destination.country}</h3>
                  <div>
                    <p className="text-sm font-bold">{destination.spots}</p>
                    <p className="text-sm font-bold">{destination.duration}</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="mr-4">
                  <Arrow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDest;
