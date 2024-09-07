import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const {  content } = useCart();

  return (
    <div className="container mx-auto relative bg-[url('assets/hero_img/hero_img.png')] lg:bg-[url('assets/hero_img/hero_img.png'),url('assets/hero_img/hero_img.png')] h-[800px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl uppercase w-[50%] font-bold max-md:text-[25px] text-7xl mb-10">
          {content.haader_title}
        </h1>
        <Link to='tel:+998906457045' target='_blank' rel='noopener noreferrer' className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition">
          {content.hero_btn}
        </Link>

      </div>
    </div>
  );
}

export default Header;
