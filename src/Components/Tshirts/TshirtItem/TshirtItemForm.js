import classes from './TshirtItemForm.module.css';

const TshirtItemForm = (props) => {

    const addItemToCartLarge = async (event) => {
        try {
            event.preventDefault();
            await fetch(`https://crudcrud.com/api/7913bbf556a942cdb164241232b29434/cart`,
                {
                    method: 'POST',
                    body: JSON.stringify({ ...props.item, largequantity: 1, mediumquantity: 0, smallquantity: 0, quantity: 1 }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

        }
        catch (error) {
            console.log(error);
        }
    }

    const addItemToCartMedium = async (event) => {
        try {
            event.preventDefault();
            await fetch(`https://crudcrud.com/api/7913bbf556a942cdb164241232b29434/cart`,
                {
                    method: 'POST',
                    body: JSON.stringify({ ...props.item, largequantity: 0, mediumquantity: 1, smallquantity: 0, quantity: 1 }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

        }
        catch (error) {
            console.log(error);
        }
    }

    const addItemToCartSmall = async (event) => {
        try {
            event.preventDefault();
            await fetch(`https://crudcrud.com/api/7913bbf556a942cdb164241232b29434/cart`,
                {
                    method: 'POST',
                    body: JSON.stringify({ ...props.item, largequantity: 0, mediumquantity: 0, smallquantity: 1, quantity: 1 }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <form className={classes.form}>
            <button onClick={addItemToCartLarge}>Buy Large</button>
            <button onClick={addItemToCartMedium}>Buy Medium</button>
            <button onClick={addItemToCartSmall}>Buy Small</button>
        </form>
    )
};

export default TshirtItemForm;