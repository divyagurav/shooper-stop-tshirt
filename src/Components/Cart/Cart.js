import React, { useState, useEffect, useCallback, useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  const [carts, setCarts] = useState([]);

  const fetchCart = useCallback(async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/f42365e3a6fd4a0197b130ccfcce58e2/cart`
      );
      const data = await response.json();

      const loadedCart = [];

      for (const key in data) {
        loadedCart.push({
          id: data[key].id,
          tshirtname: data[key].tshirtname,
          description: data[key].description,
          price: data[key].price,
          quantity: data[key].quantity,
          largesize: data[key].largesize,
          mediumsize: data[key].mediumsize,
          smallsize: data[key].smallsize,
          largequantity: data[key].largequantity,
          mediumquantity: data[key].mediumquantity,
          smallquantity: data[key].smallquantity,
        });
      }
      setCarts(loadedCart);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const map = new Map();
  carts.forEach((item) => {
    if (map.has(item.id)) {
      let it = map.get(item.id);

      map.set(item.id, {
        id: it.id,
        tshirtname: it.tshirtname,
        description: it.description,
        price: it.price,
        largequantity: Number(it.largequantity) + Number(item.largequantity),
        mediumquantity: Number(it.mediumquantity) + Number(item.mediumquantity),
        smallquantity: Number(it.smallquantity) + Number(item.smallquantity),
      });
    } else {
      map.set(item.id, item);
    }
  });

  let cart = [];
  map.forEach((item, key) => {
    cart.push(item);
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.map((item) => (
        <li key={item.id} className={classes["cart-item"]}>
          <div>
            <h2>{item.tshirtname}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>₹ {item.price}</span>
              <br />
              <span className={classes.quantity}>
                x L {item.largequantity || 0}
              </span>
              <span className={classes.quantity}>
                x M {item.mediumquantity || 0}
              </span>
              <span className={classes.quantity}>
                x S {item.smallquantity || 0}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
  let total = 0;
  let quantity = 0;
  carts.forEach((item) => {
    total += Number(item.price * item.quantity);
    quantity += Number(item.quantity);
  });
  cartcntx.addQuantity(quantity);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount - ₹ {total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
