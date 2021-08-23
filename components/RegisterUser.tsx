import styled from 'styled-components';
import Input from './StyledInput';

const StyledButton = styled.button`
  width: 100%;
  border: none;
  margin-top: 20px;
  padding: 15px 0;
  color: white;
  background-color: ${props => props.theme.primary};
  border-radius: 2px;
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

const RegisterUser = () => {
  return (
    <StyledForm>
      <Input name='First Name' />
      <Input name='Last Name' />
      <Input name='Email' type='email' />
      <Input name='Password' type='password' />
      <Input name='Confirm Password' type='password' />
      <StyledButton>Signup</StyledButton>
    </StyledForm>
  );
};

export default RegisterUser;
