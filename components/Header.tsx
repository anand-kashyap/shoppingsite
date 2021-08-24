import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from 'public/logo.png';
import { capitalizeTitle } from 'utils';
import Cart from './Cart';
import { NavLinks, StyledHeader, UserActions } from './StyledHeader';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <StyledHeader className='container'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,700&display=swap'
          rel='stylesheet'
        />
        <title>Sabka Bazaar{capitalizeTitle(pathname, '|')}</title>
      </Head>
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image src={logo} alt='Sabka Bazaar Logo' />
          </a>
        </Link>
      </div>
      <nav>
        <NavLinks
          activePath={pathname}
          links={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
          ]}
        />
      </nav>
      <UserActions>
        <NavLinks
          links={[
            { label: 'SignIn', href: '/login' },
            { label: 'Register', href: '/register' },
          ]}
        />
        <Cart />
      </UserActions>
    </StyledHeader>
  );
};

export default Header;
