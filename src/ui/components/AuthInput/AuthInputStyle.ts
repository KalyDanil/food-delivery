import styled from "styled-components";

const AuthInputStyle = styled.div`
  width: 140px;
  margin-bottom: 10px;

  .authInput {
    &__label {
      font-size: 12px;
    }

    &__error {
      font-size: 12px;
      color: red;
    }
  }
`;

export default AuthInputStyle;
