import styled from 'styled-components';

interface IButton {
  small?: boolean;
  width?: string;
}

const StyledButton = styled.button.attrs<IButton>(({ small = false }) => ({
  width: small ? 'initial' : '100%',
}))<IButton>`
  width: ${props => props.width};
  border: none;
  margin-top: 20px;
  padding: 15px ${props => (props.small ? '15px' : 0)};
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
