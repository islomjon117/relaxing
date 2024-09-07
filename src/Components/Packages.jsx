import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { useCart } from '../context/CartContext'; // Import the useCart hook

function Packages() {
  const { addToCart, content } = useCart();

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="hidden md:inline absolute top-1/2 right-[-60px] border-2 p-4 rounded-full hover:shadow-xl transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowRight size={30} className="text-gray-700" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="hidden md:inline absolute top-1/2 left-[-60px] border-2 p-4 rounded-full hover:shadow-xl transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowLeft size={30} className="text-gray-700" />
      </div>
    );
  };

  const destinations = [
    {
      country: 'Buhoro',
      duration: '3',
      description: content.city_info1,
      image: 'https://www.yaptik.biz/wp-content/uploads/2020/02/buhara-scaled.jpg',
    },
    {
      country: 'Samarqand',
      duration: '3',
      description: content.city_info2,
      image: 'https://tourist.uz/wp-content/uploads/2024/03/1648097757_54-kartinkin-net-p-samarkand-kartinki-59.jpg',
    },
    {
      country: 'Xiva',
      duration: '3',
      description: content.city_info3,
      image: 'https://i.pinimg.com/originals/7b/cf/48/7bcf48474292a9cdec5760e643c6abfe.jpg',
    },
    {
      country: 'Shohmardon',
      duration: '3',
      description: content.city_info4,
      image: 'https://avatars.mds.yandex.net/i?id=191c613b08d5da7998becf48d766a8b5-5233038-images-thumbs&n=13',
    },
    {
      country: 'Toshkent',
      duration: '3',
      description: content.city_info5,
      image: 'https://sun9-57.userapi.com/impg/ivuCX-BbJRmD8QtjgfwFJI8TMftZluK1NPAR-w/p6TgmLCBJuE.jpg?size=1100x733&quality=96&sign=6b284298e0e3d989e6de60dbe96350ab&c_uniq_tag=k5iAbqv1oLEWBrll__EnCDhjDjNBAfNRnZtVNAk5MyA&type=album',
    },
    {
      country: 'Qoqon',
      duration: '3',
      description: content.city_info6,
      image: 'https://storage.kun.uz/source/9/cbzJPn4qviKyCYhmtll83sW2vyWHPzCl.jpg',
    },
    {
      country: 'Andijon',
      duration: '3',
      description: content.city_info7,
      image: 'https://img.goodfon.ru/original/2560x1600/6/26/andijan-andijon-uzb-uzbekistan-andizhon-andizhan.jpg',
    },
    {
      country: 'Margilon',
      duration: '3',
      description: content.city_info8,
      image: 'https://avatars.mds.yandex.net/i?id=e94f0833a1142debdba47ef1b6293c28c997d40256e37cc0-12422470-images-thumbs&n=13',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-16 bg-[#ECF1F0]">
      <h1 className="text-center text-4xl font-bold mb-10">{content.best_places}</h1>
      <div className="w-full max-w-5xl mx-auto relative">
        <Slider {...settings}>
          {destinations.map((destination, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[450px] flex flex-col justify-between">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-lg font-semibold capitalize">{destination.duration} {content.day}</h3>
                    <p className="text-gray-600">{destination.price}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 capitalize flex-grow">{destination.description}</p>
                </div>
                <div className="flex justify-between items-center p-4">
                  <p className="text-center capitalize text-gray-700 text-sm font-semibold">
                    {destination.country}
                  </p>
                  <p className="text-sm capitalize cursor-pointer font-semibold text-gray-700" onClick={() => addToCart(destination)}>
                    {content.bron_qilish}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Packages;
