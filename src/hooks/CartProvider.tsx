import {CartProductProps, ProductProps} from '@/models/product';
import React, {createContext, useContext, useState} from 'react';

interface CartContextProps {
  cart: CartProductProps[] | null;
  updateCart: (item: ProductProps, quantity: number) => void;
  clearCart: () => void;
}
//TODO: naprawic typescrpit bledy
const CartContext = createContext<CartContextProps>({});

export const useCartContext = () => useContext(CartContext);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const demoCart = [
    {
      product: {id: 0, name: '', price: '', description: '', photo: ''},
      quantity: 0,
    },
  ];
  const [cart, setCart] = useState(demoCart);

  const updateCart = (product: ProductProps, quantity: number) => {
    let inCart = false;
    const newCart = cart.map(item => {
      let quant = item.quantity;
      if (item.product.id === product.id) {
        quant += quantity;
        inCart = true;
      }
      return {product: item.product, quantity: quant};
    });
    if (inCart) {
      setCart([...newCart]);
    } else {
      setCart([...cart, {product, quantity}]);
    }
  };
  const clearCart = () => {
    setCart(demoCart);
  };

  return (
    <CartContext.Provider value={{cart, updateCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
