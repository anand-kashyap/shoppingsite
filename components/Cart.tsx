import { closeCart, openCart } from 'app/cartSlice';
import { RootState } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import CartModal from './CartModal';
import CartPortal from './CartPortal';

const StyledCartBtn = styled.button`
  border: none;
  cursor: pointer;
  column-gap: 0.5rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.secondary};
  padding: 5px 10px;
  border-radius: 2px;
  & > p {
    margin: 0;
  }
  .cart-img {
    width: 25px;
  }
  svg {
    fill: ${props => props.theme.primary};
  }
`;

const StyledCartOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const GlobalStyle = createGlobalStyle`
body{
  overflow: hidden;
}
`;

const Cart = () => {
  const { totalQty, isOpen } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <StyledCartBtn onClick={() => dispatch(openCart())}>
        <div className='cart-img'>
          <svg
            version='1.1'
            id='Layer_1'
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 24 24'
          >
            <path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z' />
          </svg>
        </div>
        <p>{totalQty + ' items'}</p>
      </StyledCartBtn>
      {isOpen && (
        <CartPortal>
          <GlobalStyle />
          <StyledCartOverlay onClick={() => dispatch(closeCart())} />
          <CartModal />
        </CartPortal>
      )}
    </>
  );
};

export default Cart;
