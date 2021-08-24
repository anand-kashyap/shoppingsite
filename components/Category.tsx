import { StyledButton } from 'components/StyledForm';
import Link from 'next/link';
import styled from 'styled-components';
import { ICategory } from 'types';

interface ICat {
  readonly even: boolean;
  readonly last: boolean;
}

const StyledCategory = styled.div.attrs<ICat>(props => ({
  even: props.even || false,
}))<ICat>`
  display: flex;
  flex-direction: ${props => (props.even ? 'row-reverse' : 'row')};
  position: relative;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -1rem;
    background: ${props =>
      !props.last
        ? 'radial-gradient(farthest-corner at 50% 0px, grey 0%, transparent 50%)'
        : 'none'};
    width: 100%;
    height: 1rem;
  }

  .cat-img {
    width: 30%;
  }
`;

interface EICategory extends Omit<ICategory, 'key'> {
  keyname: string;
  even: boolean;
  last: boolean;
}

const StyledCatDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Category = (cat: EICategory) => {
  return (
    <StyledCategory even={cat.even} last={cat.last}>
      <div className='cat-img'>
        <img src={cat.imageUrl} alt={cat.name} />
      </div>
      <StyledCatDetails>
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
        <Link href={`/products?category=${cat.id}`}>
          <StyledButton small>{'Explore ' + cat.keyname}</StyledButton>
        </Link>
      </StyledCatDetails>
    </StyledCategory>
  );
};

export default Category;
