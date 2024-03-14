import styled from 'styled-components';

const RegistrationStyle = styled.div`
  .registration {
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__inputLine {
      width: 140px;
      margin-bottom: 10px;
    }

    &__inputLabel {
      font-size: 12px;
    }

    &__error {
      font-size: 12px;
      color: red;
    }
  }
`;

export default RegistrationStyle;
