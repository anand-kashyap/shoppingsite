import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { StyledButton, StyledForm } from './StyledForm';
import Input from './StyledInput';

const RegisterUser = () => {
  const { push } = useRouter();
  const submitForm = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    push('/login');
  };

  return (
    <StyledForm onSubmit={submitForm}>
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
