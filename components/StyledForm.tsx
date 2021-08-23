import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  border: none;
  margin-top: 20px;
  padding: 15px 0;
  color: white;
  background-color: ${props => props.theme.primary};
  border-radius: 2px;
`;

const StyledFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 10%;
  p {
    margin: 0;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  @media (min-width: 992px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

export { StyledButton, StyledForm, StyledFormContainer };
