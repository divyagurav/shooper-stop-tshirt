import classes from './TshirtItem.module.css';
import TshirtItemForm from './TshirtItemForm';


const TshirtItem = (props) => {
  const price =  `₹ ${props.price.toFixed(2)}`;
    return (
    <li className={classes.shoe}>
      <div>
        <h3>{props.tshirtname}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.largesize}>{props.largesize} Left</div>
        <div className={classes.mediumsize}>{props.mediumsize} Left</div>
        <div className={classes.smallsize}>{props.smallsize} Left</div>
      </div>
      <div>
        <TshirtItemForm  id={props.id}  item={props}/>
      </div>
    </li>
  );
};

export default TshirtItem;