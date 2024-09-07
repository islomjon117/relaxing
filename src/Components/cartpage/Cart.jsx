import React from 'react';
import { useCart } from '../../context/CartContext';
import '../cartpage/cart.css';

import { RiDeleteBin5Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    const handleDelete = (item) => {
        removeFromCart(item);
    };

    return (
        <div className='cart'>
            <div className="container_main">
                <div className="cart_main">
                    <h2 className="text-2xl font-bold text-center">Cart</h2>
                    {cart.length === 0 ? (
                        <p className="text-center text-[50px]  mt-[200px] font-extrabold text-[#e6e1e1]">Your cart is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="p-2 mt-20 border-b lg:flex justify-between items-center">
                                <div className='flex  items-center lg:gap-10'>
                                    <img src={item.image} className='w-20' alt={item.country} />

                                    <div className='cart_info_box'>
                                        <p className='cart_info_title'>Country</p>
                                        <p>{item.country}</p>
                                    </div>
                                  
                                    <div className='cart_info_box'>
                                        <p className='cart_info_title'>Quantity</p>
                                        <p>({item.quantity}x)</p>
                                    </div>
                                </div>
                                <div className='text-end mt-9'>
                                    <button className='lg:mr-10 text-[30px] text-green-500'>
                                        <CiEdit />
                                    </button>
                                    <button className="delete_button max-md:ml-5 text-[30px] text-red-500" onClick={() => handleDelete(item)}>
                                        <RiDeleteBin5Fill />
                                    </button>
                                </div>

                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
