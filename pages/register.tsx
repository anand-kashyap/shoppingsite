import RegisterUser from 'components/RegisterUser';
import { StyledFormContainer } from 'components/StyledForm';
import React from 'react';

const Register = () => {
  return (
    <StyledFormContainer>
      <div className='left'>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className='right'>
        <RegisterUser />
      </div>
    </StyledFormContainer>
  );
};

export default Register;
