import { StyledButton, StyledForm, StyledFormContainer } from 'components/StyledForm';
import Input from 'components/StyledInput';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

const Login = () => {
  const { push } = useRouter();
  const loginUser = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    push('/');
  };
  return (
    <StyledFormContainer>
      <div className='left'>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className='right'>
        <StyledForm onSubmit={loginUser}>
          <Input name='Email' type='email' />
          <Input name='Password' type='password' />
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </div>
    </StyledFormContainer>
  );
};

export default Login;
