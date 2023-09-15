import { Fragment } from "react";
import tshirtImage from '../../assets/tshirt.png';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Shoppers Stop</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={tshirtImage} alt="A table full of delicious food!" />
        </div>
    </Fragment>
    );
}

export default Header;