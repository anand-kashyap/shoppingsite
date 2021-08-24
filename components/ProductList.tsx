import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IProduct } from 'types';
import { getProducts } from 'utils/api';
import ProductCard from './ProductCard';

const StyledProductContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin: 20px 0;
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductList = ({ selectedCatId }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // get products from api
    getProducts().then(setProducts);
  }, []);

  return (
    <StyledProductContainer>
      {products
        .filter(p => p.category.includes(selectedCatId))
        // .filter(pr => pr.id === '5b6c6a7f01a7c38429530883') // todo: remove later
        .map(prod => (
          <ProductCard key={prod.id} {...prod} />
        ))}
    </StyledProductContainer>
  );
};

export default ProductList;
