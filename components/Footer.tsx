import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.secondary};
  padding: 10px 0;
  font-size: 0.85rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p className='container'>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
    </StyledFooter>
  );
};

export default Footer;
