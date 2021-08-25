import styled from 'styled-components';

const CartHeader = styled.div`
  padding: 10px 10px 10px 15px;
  background-color: #1d2124;
  color: white;
  display: flex;
  justify-content: space-between;
  * {
    margin: 0;
    padding: 0;
  }
  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 7px;
  }
  .heading {
    display: flex;
    column-gap: 0.2rem;
    align-items: center;
    p {
      font-weight: 600;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

const CardBody = styled.div`
  flex-grow: 1;
  background-color: ${props => props.theme.secondary};
  border-bottom: 1px solid #c0c0c0;
  overflow-y: auto;
`;
const CardFooter = styled.div`
  padding: 10px;
  p {
    margin: 0;
    font-size: 0.75rem;
    text-align: center;
  }
  button {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-top: 10px;
  }
`;

const StyledCartModal = styled.div`
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 10%;
  top: 11%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-width: 25vw;
  .min-banner {
    background-color: white;
    border-radius: 2px;
    padding: 5px 10px;
    margin: 10px 2%;
    display: flex;
    font-size: 0.8rem;
    column-gap: 1rem;
    align-items: center;
  }
`;

export { StyledCartModal, CardBody, CartHeader, CardFooter };
