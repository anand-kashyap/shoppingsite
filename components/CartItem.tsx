import { addToCart, removeFromCart } from 'app/cartSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ICartProduct } from 'types';

const StyledCartItem = styled.div`
  display: flex;
  background-color: white;
  padding: 15px 15px;
  column-gap: 1rem;
  margin-top: 10px;
  * {
    margin: 0;
    padding: 0;
  }

  .name {
    flex-grow: 1;
    > p {
      font-weight: 600;
    }
    .calc {
      display: flex;
      column-gap: 1rem;
      margin-top: 20px;
      .qty {
        display: flex;
        column-gap: 0.9rem;
      }
    }
  }
  .amount {
    margin-left: 2rem;
    margin-top: 20px;
    align-self: center;
  }
`;

const QtyBtn = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  width: 18px;
  height: 18px;
  outline-style: initial;
  border-radius: 100px;
  cursor: pointer;
`;

const CartItem = ({ item }: { item: ICartProduct }) => {
  const dispatch = useDispatch();

  return (
    <StyledCartItem>
      <div className='img'>
        <img src={item.imageURL} alt={item.name} width='75' />
      </div>
      <div className='name'>
        <p>{item.name}</p>
        <div className='calc'>
          <div className='qty'>
            <QtyBtn onClick={() => dispatch(removeFromCart(item.id))}>-</QtyBtn>
            <span>{item.qty}</span>
            <QtyBtn onClick={() => dispatch(addToCart(item))}>+</QtyBtn>
          </div>
          <span>X</span>
          <p>{'Rs. ' + item.price}</p>
        </div>
      </div>
      <div className='amount'>{'Rs.' + item.price * item.qty}</div>
    </StyledCartItem>
  );
};

export default CartItem;
