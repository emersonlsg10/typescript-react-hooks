import React, { useReducer } from "react";
// import CartContext from "./CartContext";

interface Cart {
  products: string[];
  shipping_value?: number;
}

type CartActionType = {
  type: "ADD_PRODUCT" | "REMOVE_PRODUCT";
};

const AppReducer: React.FC = () => {
  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch (action.type) {
        case "ADD_PRODUCT":
          return {
            ...state,
            products: [...state.products, "Produto Novo"],
          };
        case "REMOVE_PRODUCT":
          return {
            ...state,
            products: [...state.products],
          };
        default:
          return state;
      }
    },
    {
      products: [],
      shipping_value: 0,
    }
  );

  return <ul></ul>;
};
export default AppReducer;
