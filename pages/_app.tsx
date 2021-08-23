import Footer from 'components/Footer';
import Header from 'components/Header';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  letter-spacing: -0.5px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
  color: black;
}

.container{
  @media (min-width: 992px) {
    padding: 0 5%;
  }

  @media (min-width: 1200px) {
    padding: 0 10%;
  }
}
`;

const theme = {
  primary: '#d10157',
  secondary: '#eeeeee',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <main className='container'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
