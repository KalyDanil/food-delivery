import styled from 'styled-components';
import style from '../../../../style';

const InputBoxStyle = styled.div`
  width: 140px;
  height: 50px;
  margin-bottom: 10px;

  .inputBox {
    &__label {
      position: relative;
      left: 5px;
      font-weight: 500;
      font-size: ${style.fontSize.small};
    }

    &__input {
      ${style.input.base}
      width: 100%;
    }

    &__error {
      font-size: ${style.fontSize.small};
      font-weight: 600;
      color: ${style.colors.red};
    }
  }
`;

export default InputBoxStyle;
