import RegisterUser from 'components/RegisterUser';
import React from 'react';
import styled from 'styled-components';

const StyledRegister = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 10%;
  left > p {
    margin: 0;
  }
`;

const Register = () => {
  return (
    <StyledRegister>
      <div className='left'>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className='right'>
        <RegisterUser />
      </div>
    </StyledRegister>
  );
};

export default Register;
