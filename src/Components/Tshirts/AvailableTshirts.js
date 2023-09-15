import React, { useContext } from "react";
import classes from "./AvailableTshirts.module.css";
import Card from "../UI/Card";
import TshirtItem from "./TshirtItem/TshirtItem";
import CartContext from "../../store/cart-context";

const AvailableTshirts = () => {

  const cartCtx = useContext(CartContext);
  let tshirts = cartCtx.tshirts;
  console.log(tshirts)
  

  const tshirtsList = tshirts.map((tshirt) => (
    <TshirtItem
      id={tshirt.id}
      key={tshirt.id}
      tshirtname={tshirt.tshirtname}
      description={tshirt.description}
      price={tshirt.price}
      largesize={tshirt.largesize}
      mediumsize={tshirt.mediumsize}
      smallsize={tshirt.smallsize}
    />
  ));

  return (
    <section className={classes.tshirt}>
      <Card>
        <ul>{tshirtsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTshirts;