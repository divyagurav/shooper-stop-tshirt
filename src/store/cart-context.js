import React from "react";

const CartContext = React.createContext({
    quantity: null,
    tshirts: [],
    addQuantity: (n) => {},
    availableaproducts: () => {}
});

export default CartContext;