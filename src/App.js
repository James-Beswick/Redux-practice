import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();
  const cartIsShowing = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending',
          message: 'sending cart data',
        })
      );

      const res = await fetch(
        'https://redux-project-2670b-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      );

      if (!res.ok) {
        throw new Error('Sending data failed!');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'sent cart data successfully',
        })
      );
    };

    sendCartData().catch(err => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Failed',
          message: 'sending cart data failed',
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Layout>
      {cartIsShowing && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
