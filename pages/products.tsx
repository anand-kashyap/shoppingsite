import ProductList from 'components/ProductList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICategory } from 'types';
import { getCategories } from 'utils/api';

const PContainer = styled.div`
  @media (min-width: 992px) {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 20% auto;
  }
`;

const StyledSidebar = styled.aside`
  background-color: ${props => props.theme.secondary};
  display: none;
  ul {
    font-weight: 400;
    letter-spacing: -1px;
    margin: 0;
    margin-left: 15px;
    padding: 0;
    color: #747474;
    li {
      padding: 10px 0;
      border-bottom: 1px solid #d6d6d6;
      cursor: pointer;
    }
    li.selected {
      font-weight: 600;
    }
  }
  @media (min-width: 992px) {
    display: block;
  }
`;

const Home = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const router = useRouter();
  const [selectedCatId, setSelectedCatId] = useState('');

  useEffect(() => {
    // get cats from api
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    setSelectedCatId((router.query.category as string) || '');
  }, [router.query.category]);

  return (
    <PContainer>
      <StyledSidebar>
        <ul>
          {categories.map(cat => (
            <li
              key={cat.id}
              onClick={() => {
                router.push(`/products?category=${cat.id}`, undefined, {
                  shallow: true,
                });
              }}
              className={selectedCatId === cat.id ? 'selected' : ''}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </StyledSidebar>
      <ProductList selectedCatId={selectedCatId} />
    </PContainer>
  );
};
export default Home;
