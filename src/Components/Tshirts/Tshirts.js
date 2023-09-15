import { Fragment } from "react";
import AddTshirts from "./AddTshirts";
import AvailableTshirts from "./AvailableTshirts";

const Tshirts = (props) => {
    return (
        <Fragment>
            <AddTshirts/>
            <AvailableTshirts/>
        </Fragment>
    );
};

export default Tshirts;