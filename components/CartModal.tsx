import { closeCart } from 'app/cartSlice';
import { RootState } from 'app/store';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import {
  CardBody,
  CardFooter,
  CartHeader,
  StyledCartModal,
} from './StyledCart';
import { StyledButton } from './StyledForm';

const CartModal = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <StyledCartModal>
      <CartHeader>
        <div className='heading'>
          <p>My Cart </p>
          <span>(1 Item)</span>
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
          <CartItem item={item} />
        ))}
        <div className='min-banner'>
          <div className='banner-img'>
            <img src='/lowest-price.png' alt='lowest price' width='100' />
          </div>
          <p>You wont find it cheaper anywhere</p>
        </div>
      </CardBody>
      <CardFooter>
        <p className='note'>Promo code can be applied on Payment Page</p>
        <StyledButton>
          <span>Proceed to Checkout</span>
          <span>Rs.187 &gt;</span>
        </StyledButton>
      </CardFooter>
    </StyledCartModal>
  );
};

export default CartModal;
