import { closeCart } from 'app/cartSlice';
import { RootState } from 'app/store';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICartProduct } from 'types';
import CartItem from './CartItem';
import {
  CardBody,
  CardFooter,
  CartHeader,
  StyledCartModal,
} from './StyledCart';
import { StyledButton } from './StyledForm';

const getTotalAmt = (items: ICartProduct[]) =>
  items.reduce((acc, item) => {
    acc += item.price * item.qty;
    return acc;
  }, 0);

const CartModal = () => {
  const dispatch = useDispatch();
  const { items, totalQty } = useSelector((state: RootState) => state.cart);

  return (
    <StyledCartModal>
      <CartHeader>
        <div className='heading'>
          <p>My Cart </p>
          {totalQty > 0 && (
            <span>
              ({totalQty} Item{totalQty > 1 ? 's' : ''})
            </span>
          )}
        </div>
        <button
          type='button'
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            dispatch(closeCart());
          }}
        >
          X
        </button>
      </CartHeader>
      <CardBody>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        {totalQty > 0 && (
          <div className='min-banner'>
            <div className='banner-img'>
              <img src='/lowest-price.png' alt='lowest price' width='100' />
            </div>
            <p>You wont find it cheaper anywhere</p>
          </div>
        )}
      </CardBody>
      <CardFooter>
        {totalQty > 0 && (
          <p className='note'>Promo code can be applied on Payment Page</p>
        )}
        <StyledButton
          onClick={() => dispatch(closeCart())}
          style={{ display: 'block' }}
        >
          {totalQty > 0 ? (
            <>
              <span>Proceed to Checkout</span>
              <span>{'Rs.' + getTotalAmt(items) + ' >'}</span>
            </>
          ) : (
            <span>Start Shopping</span>
          )}
        </StyledButton>
      </CardFooter>
    </StyledCartModal>
  );
};

export default CartModal;
