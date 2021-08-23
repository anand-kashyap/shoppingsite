import styled from 'styled-components';

const StyledInput = styled.div`
  position: relative;
  .inputText {
    width: 100%;
    outline: none;
    margin-top: 10px;
    padding: 20px 0 10px;
    border: none;
    border-bottom: 1px solid #b1b1b1;
    box-shadow: none !important;
  }
  .inputText:focus {
    border-color: #50c3cd;
  }
  label {
    position: absolute;
    pointer-events: none;
    color: #b1b1b1;
    top: 22px;
    left: 0px;
    transition: 0.2s ease all;
  }
  input:focus ~ label,
  input:not(:focus):valid ~ label {
    top: 10px;
    font-size: 13px;
    opacity: 1;
  }
  input:focus ~ label {
    color: #50c3cd;
  }
`;

const Input = ({ type = 'text', name, ...rest }) => {
  return (
    <StyledInput>
      <input type={type} className='inputText' required {...rest} />
      <label>{name}</label>
    </StyledInput>
  );
};

export default Input;
