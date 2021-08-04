import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = props => {
  const totalItems = useSelector(state => state.totalItems);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
