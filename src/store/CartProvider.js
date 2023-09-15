import React, {useState, useEffect, useCallback} from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    const [quantity, updateQuantity] = useState(0);

    const addQuantityHandler = n => {
        updateQuantity(n);
    };


    const [tshirts, setTshirts] = useState([]);

    const fetchTshirt = useCallback(async () => {
    try {

      const response = await fetch(`https://crudcrud.com/api/7913bbf556a942cdb164241232b29434/product`);
      const data = await response.json();

      const loadedTshirt = [];

      for (const key in data) {
        loadedTshirt.push({
          id: data[key]._id,
          tshirtname: data[key].tshirtname,
          description: data[key].description,
          price: data[key].price,
          quantity: data[key].quantity,
          largesize: data[key].largesize,
          mediumsize: data[key].mediumsize,
          smallsize: data[key].smallsize
        });
      }
      setTshirts(loadedTshirt);
    }
    catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchTshirt()
  }, [fetchTshirt]);

    const cartContext = {
        quantity: quantity,
        tshirts: tshirts,
        addQuantity: addQuantityHandler,
        availableaproducts: fetchTshirt
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;