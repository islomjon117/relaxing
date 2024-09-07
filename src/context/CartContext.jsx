import React, { createContext, useContext, useState, useEffect } from 'react';

import Translation from "../../public/common/common.json";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.country === item.country);
            if (existingItem) {
                return prevCart.map(cartItem => 
                    cartItem.country === item.country 
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemToRemove) => {
        const updatedCart = cart.filter(item => item.country !== itemToRemove.country);
        setCart(updatedCart);
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

     // language
     const [language, setLanguage] = useState("uzbek");
     const [content, setContent] = useState({});
     // language useEffect
     useEffect(() => {
         if (language === "english") {
             setContent(Translation.english);
         } else if (language === "русский") {
             setContent(Translation.русский);
         } else if (language === "uzbek") {
             setContent(Translation.uzbek);
         }
     }, [language]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,language,setLanguage,content,setContent }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
