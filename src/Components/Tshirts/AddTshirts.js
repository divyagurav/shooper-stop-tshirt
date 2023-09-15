import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './AddTshirts.module.css';
import Input from '../UI/Input';

const AddTshirts = (props) => {
  const cartCtx = useContext(CartContext);

  const addProduct = async (event) => {
    try {
      event.preventDefault();
      const tshirt = {
        id: Math.round().toLocaleString,
        tshirtname: event.target.tshirtname.value,
        description: event.target.description.value,
        price: (+event.target.price.value),
        largesize: event.target.largesize.value,
        mediumsize: event.target.mediumsize.value,
        smallsize: event.target.smallsize.value
      }
      event.target.tshirtname.value = '';
      event.target.description.value = '';
      event.target.price.value = '';
      event.target.largesize.value = '';
      event.target.mediumsize.value = '';
      event.target.smallsize.value = '';

      await fetch(`https://crudcrud.com/api/7913bbf556a942cdb164241232b29434/product`,
        {
          method: 'POST',
          body: JSON.stringify(tshirt),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        cartCtx.availableaproducts();

    } 
    catch (error) {
      console.log(error);
    }
  }
  return (
    <section className={classes.summary}>
      <form className={classes.form} onSubmit={addProduct}>

        <Input label='Tshirt Name' input={{ name: 'tshirtname', type: 'text' }} />
        <Input label='Description' input={{ name: 'description', type: 'text' }} />
        <Input label='Price' input={{ name: 'price', type: 'number' }} />
        <Input label='Large' input={{ name: 'largesize', type: 'number' }} />
        <Input label='Medium' input={{ name: 'mediumsize', type: 'number' }} />
        <Input label='Small' input={{ name: 'smallsize', type: 'number' }} />

        <button>Add Product</button>
      </form>
    </section>
  );
};


export default AddTshirts;