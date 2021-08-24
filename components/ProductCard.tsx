import styled from 'styled-components';
import { IProduct } from 'types';
import { StyledButton } from './StyledForm';

const StyledProduct = styled.div`
  border-bottom: 1px dashed #a7a7a7;
  padding-bottom: 0.6rem;
  font-weight: 500;
  h2 {
    margin: 0;
    font-size: 1.3rem;
  }
  .desc {
    background-color: ${props => props.theme.secondary};
    padding: 10px 5px;
    border-radius: 2px;
    margin: 0.6rem 0;
  }
  .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-around;
    * {
      margin: 0;
    }
  }
`;

const ProductCard = (prod: IProduct) => {
  return (
    <StyledProduct key={prod.id}>
      <h2>{prod.name}</h2>
      <img src={prod.imageURL} alt={prod.name} />
      <p className='desc'>{prod.description}</p>
      <div className='body'>
        <p>{'MRP Rs.' + prod.price}</p>
        <StyledButton>Buy Now</StyledButton>
      </div>
    </StyledProduct>
  );
};

export default ProductCard;
