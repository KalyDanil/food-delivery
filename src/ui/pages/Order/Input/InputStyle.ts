import styled from 'styled-components';

const InputStyle = styled.div`
  width: 140px;
  height: 50px;
  margin-bottom: 10px;

  .input {
    &__label {
      font-size: 12px;
    }

    &__error {
      font-size: 12px;
      color: red;
    }
  }
`;

export default InputStyle;
