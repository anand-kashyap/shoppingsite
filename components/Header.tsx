import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from 'public/logo.png';
import styled from 'styled-components';
import { capitalizeTitle } from 'utils';

const StyledHeader = styled.header`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: auto 1fr 0.2fr;
  align-content: center;
  column-gap: 10%;
  box-shadow: 0px 5px 4px 0 #d6d6d6;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2em;
  }
  nav {
    display: flex;
    align-items: flex-end;
  }
  nav > ul {
    padding: 15px 0;
  }
  .logo img {
    min-width: 186px;
  }
`;

const UserActions = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 1em;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  ul > li {
    font-size: small;
    font-weight: bold;
  }
  .cart {
    font-size: 0.95rem;
    grid-column: 1 / span 2;
    display: flex;
    align-items: center;
    background-color: #e6e6e6;
    padding: 5px 10px;
    border-radius: 2px;
  }
  .cart > p {
    margin: 0;
  }
  .cart-img {
    width: 25px;
  }
`;

const Header = () => {
  const { pathname } = useRouter();
  return (
    <StyledHeader className='container'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,700&display=swap' rel='stylesheet' />
        <title>Sabka Bazaar{capitalizeTitle(pathname, '|')}</title>
      </Head>
      <div className='logo'>
        <Image src={logo} alt='Sabka Bazaar Logo' />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
        </ul>
      </nav>
      <UserActions>
        <ul>
          <li>SignIn</li>
          <li>Register</li>
        </ul>
        <div className='cart'>
          <div className='cart-img'>
            <img src='/cart.svg' alt='Shopping Cart' />
          </div>
          <p>0 Items</p>
        </div>
      </UserActions>
    </StyledHeader>
  );
};

export default Header;
