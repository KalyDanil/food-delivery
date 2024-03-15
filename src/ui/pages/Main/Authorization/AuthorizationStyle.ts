import styled from 'styled-components';
import style from '../../../../style';

const AuthorizationStyle = styled.div`
  .authorization {
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__inputsBox {
      margin-bottom: 10px;
    }

    &__submitButton {
      ${style.button.base}
      font-size: ${style.fontSize.medium};
      border-radius: 10px;
    }
  }
`;

export default AuthorizationStyle;
