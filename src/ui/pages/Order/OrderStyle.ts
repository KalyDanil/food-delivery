import styled from 'styled-components';
import style from '../../../style';

const OrderStyle = styled.div`
  width: 100%;
  height: 100%;

  .order {
    &__form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__toMenuButton {
      ${style.button.navigation}
      position: absolute;
      left: 10px;
      top: 10px;
    }

    &__foodsList {
      width: 80%;
      height: 350px;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow: auto;
    }

    &__inputsBox {
      width: 400px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      @media screen and (max-width: ${style.breakPoints.first}) {
        width: 200px;
      }
    }

    &__label {
      font-size: ${style.fontSize.medium};
      font-weight: 600;
    }

    &__totalPrice {
      margin-bottom: 10px;
      font-size: ${style.fontSize.medium};
    }

    &__submitButton {
      ${style.button.base}
      border-radius: 10px;
      font-size: ${style.fontSize.medium};
    }
  }
`;

export default OrderStyle;
